import React, {Component} from 'react';

const $=require('jquery');
$.DataTable=require('datatables.net');

export class Tbl extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.$el=$(this.el)
        console.log(this.props.data);
        this.$el.dataTable(
            {
                data: this.props.data,
                columns: [
                    {title: "ID"},
                    {title: "Details"}
                ]
            }
        )
    }

    // componentWillUnmount(){
    //     this.$el.DataTable.destroy(true);
    // }

    render(){
        return(
            <div>
                <table className="table table-borderless display" width="100%" ref={el => this.el = el}>

                </table>
            </div>
        );
    }
}