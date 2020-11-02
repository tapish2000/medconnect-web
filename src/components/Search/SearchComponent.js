import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading'
import ReactTags from 'react-tag-autocomplete'
import ShowPage from '../ShopsList/ShowPage';
import { Link } from 'react-router-dom';
import './SearchComponent.css'

class Search extends Component{
    constructor (props) {
        super(props)
        
        this.state = {
            tags: [],
            suggestions: [],
            loading:false,
        }
        
        this.reactTags = React.createRef()
        }
        
        onDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
        }
        
        onAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
    }
    componentDidMount(){
        axios.get('https://glacial-caverns-39108.herokuapp.com/medicine/tags')
        .then((res)=>{
            this.setState({
                suggestions : res.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    onSearch = (event) => {
        this.setState({loading:true})
        event.preventDefault();
        console.log("I was clicked");
        const params = JSON.stringify({
            latitude : "29.364138",
            longitude : "76.972546",
            tags : this.state.tags,
            travelMode : "walking",
        })
        axios.post('https://glacial-caverns-39108.herokuapp.com/search',params,{
            "headers": {
                "content-type": "application/json",
            },
        }).then((res)=>{
            console.log(res);
            window.localStorage.setItem("searchedData", JSON.stringify(res.data.shops));
            //window.location.href = "/shoplist"
            this.setState({loading:false})
            this.props.history.push("/shoplist");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() {
        return (
            <>
            <Loading show={this.state.loading} />
            <Form inline className="Search-Form">
                <ReactTags 
                placeholderText="Type Medicine Here..."
                ref={this.reactTags}
                tags={this.state.tags}
                suggestions={this.state.suggestions}
                onDelete={this.onDelete.bind(this)}
                onAddition={this.onAddition.bind(this)} />
                <Button variant="outline-dark" onClick={this.onSearch}>Search</Button>
            </Form>
            </>
        );
    }
}

export default withRouter(Search);