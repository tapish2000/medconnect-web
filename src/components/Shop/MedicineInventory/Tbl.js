import React, {Component} from 'react';

const $=require('jquery');
$.DataTable=require('datatables.net');

export class Tbl extends Component {
    componentDidMount(){
        this.$el=$(this.el)
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

    compoentWillUnmount(){
        this.$el.DataTable.destroy(true);
    }
    render(){
        return(
            <div >
                <table className="table table-borderless display" width="100%" ref={el => this.el = el}>
                
                </table>
            </div>
        );
    }
}