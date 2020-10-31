import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Container,Carousel,Col,Row, Card, Button} from 'react-bootstrap'
import ShopCardComponent from './ShopCardComponent'
import MedicineLists from './MedicineList'

class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            Shops : {...MedicineLists}
        }
    }

    addToCartHandler=(shop)=>{
        this.props.onAddToCart(shop.medicines);
    }
    render(){
        return(
            <Container fluid>
                <h1 className="MyHeading"> Shops with searched medicines </h1>
                {MedicineLists.map((shop)=>{
                    return(
                        <Card style={{margin:"10px"}}>
                            <Card.Body>
                                <Card.Title>{shop.shop_name}</Card.Title>
                                <Carousel indicators={false}>
                                <Carousel.Item>
                                    <Row className="m-3">
                                    {shop.medicines.map((val) => {
                                        return (
                                        <Col md={3} className="mt-3 mb-3">
                                            <ShopCardComponent
                                            Key={val.id}
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            text={val.text}
                                            link={val.link}
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
        onAddToCart: (medicineList) => dispatch({type: "ADD_TO_CART", medicineList,}),
    }
};

export default connect(null, mapDispatchToProps)(ShopPage);