import React, {Component} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {Container,Carousel,Col,Row, Card, Button} from 'react-bootstrap'
import ShopCardComponent from './ShopCardComponent';
import ShopCards from './ShopCards';

class ShopPage extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            ShopList : [],
            MedicineList : [],
            loading:false
        }
    }

    componentWillMount() {
        this.setState({
            ShopList : JSON.parse(window.localStorage.getItem("searchedData"))
        });
        console.log(this.state.ShopList);
    }

    componentDidMount(){
        axios
        .get('https://glacial-caverns-39108.herokuapp.com/medicine/allopathic/branded')
        .then((response) => {
        //   console.log(response);
          let medicineListWithQuantity=response.data.map((med)=>{
              return {
                  ...med,
                  quantity:1,
              }
          })
          let finalExampleData=[];
          finalExampleData.push(
          {
              shop_name:"Sameed",
              shop_id:"5f47e5ea174464ed81cc5100",
              medicines:medicineListWithQuantity
          });
        //   console.log(finalExampleData);
          this.setState({MedicineList:finalExampleData,loading:false});
        })
        .catch((err) => {
          console.log(err);
        });
    }

    addToCartHandler=(shop)=>{
        console.log(shop);
        this.props.onAddToCart(shop);
    }
    render() {
        return(
            (this.state.loading)?<div className="SpinnerDiv">
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: 'auto' }}
            />
          </div>:
            <Container fluid>
                <h1 className="MyHeading"> Shops with searched medicines </h1>
                {this.state.ShopList.map((shop)=>{

                    return(
                        <Card style={{margin:"10px"}}>
                            <Card.Body>
                                <Card.Title>{shop.name}</Card.Title>
                                <Card.Subtitle className="text-muted">You are just this far: {shop.travelDistance} km</Card.Subtitle>
                                <Carousel indicators={false}>
                                <Carousel.Item>
                                    <Row className="m-3">
                                    {shop.searchedMedicines.map((val) => {
                                        return (
                                            <Col md={3} className="mt-3 mb-3">
                                                <ShopCardComponent
                                                Key={val._id}
                                                imgsrc={val.image_url}
                                                title={val.name}
                                                price={val.price}
                                                link="/medicinedetails"
                                                id=""
                                                />
                                            </Col>
                                        );
                                    })}
                                    </Row>
                                </Carousel.Item>
                                </Carousel>
                                <Button variant="warning" onClick={()=>this.addToCartHandler(shop)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>
        );
    }
}




const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: async ({searchedMedicines,name,_id}) => {
            const medicineList=searchedMedicines.map((medicine)=>{
                return {...medicine,shop_id:_id,shopName:name,quantity:1};
            })
            dispatch({type: "ADD_ITEM_TO_CART", medicineList,});

        }
    }
};

export default connect(null, mapDispatchToProps)(ShopPage);