import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ReactTags from 'react-tag-autocomplete'
import './SearchComponent.css'

class Search extends Component{
    constructor (props) {
        super(props)
        
        this.state = {
            tags: [],
            // need to populate it by API call
            suggestions: [
            { id: 3, name: "Paracetemol" },
            { id: 4, name: "Aspirin" },
            { id: 5, name: "Benadryl Syrup" },
            { id: 6, name: "Calpol" }
            ]
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
    render() {
        return (
            <ReactTags
              ref={this.reactTags}
              tags={this.state.tags}
              suggestions={this.state.suggestions}
              onDelete={this.onDelete.bind(this)}
              onAddition={this.onAddition.bind(this)} />
        );
    }
}

export default Search