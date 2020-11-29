import React, {Component} from 'react';
import { Grid } from 'gridjs-react';
import MedicineList from './MedicineList';
import axios from 'axios';

const $=require('jquery');
$.DataTable=require('datatables.net');

export class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
            medicineList: [],
            dataList: [],
            options: {
                'search': {
                'placeholder': '🔍 Search using medicine name...'
                },
                'pagination': {
                'previous': '⬅️',
                'next': '➡️',
                'showing': '👓 Displaying',
                'results': () => 'Records'
                }
            }
        }
    }

    componentWillMount() {
        const shopId = "5f47e5ea174464ed81cc5100";
        axios.get('https://glacial-caverns-39108.herokuapp.com/shop/medicinelist/' + shopId)
        .then((response) => {
            console.log(response.data.medicines);
            this.setState({
                medicineList: response.data.medicines
            });

            // if (JSON.stringify(this.props.newMedicine) != "{}") {
            //     console.log(this.props.newMedicine);
            //     this.setState({
            //         medicineList: this.state.medicine.push(this.props.newMedicine)
            //     })
            // }
            // console.log(this.props, typeof(this.props));

            var data = this.state.medicineList.map((val, index) => {
                console.log(val.medicine, index);
                var d_id = index;
                var d_name = val.medicine.name + '\n' + val.medicine.strength;
                var d_mf = val.medicine.manufacturer;
                var d_type = val.medicine.sub_category + "\n" + val.medicine.category;
                var d_wprice = val.wholesale_price;
                var d_rprice = val.medicine.price;
                var d_qty = val.available_qty;
                var d_pres;
                if (val.medicine.prescription) {
                    d_pres = "Yes";
                } else {
                    d_pres = "No";
                }
            return [d_id, d_name, d_mf, d_type, d_wprice, d_rprice, d_qty, d_pres];
            
            });
            
            this.setState({
                dataList: data
            })
            
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    render() {
        return(
            <div>
                <div style={{width:"100%"}}>
                    <Grid
                        data={this.state.dataList}
                        className="table-body"
                        columns={['ID', 'Name', 'Manufacturer', 'Type', 'Wholesale Price', 'Retail Price', 'Quantity', 'Prescription']}
                        search={true}
                        sort={true}
                        pagination={{
                            limit: 5,
                            enabled:true
                        }}
                        language={this.state.options}
                    />
                </div>
            </div>
        );
    }
}