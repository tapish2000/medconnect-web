import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";

class CartComponent extends Component {
state = {
  data: [
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
        medName: "Propygenta",
        shopName: "Chomu Ki Dukan",
        price: "12.63",
        qty: "5"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg",
        medName: "Headphones",
        shopName: "Sony",
        price: "200",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg",
        medName: "iPad Pro",
        shopName: "Apple",
        price: "600",
        qty: "1"
      },
    ],
    columns: [
      {
        label: '',
        field: 'img',
      },
      {
        label: <strong>Medicine/Shop Name</strong>,
        field: 'name'
      },
      {
        label: <strong>Price</strong>,
        field: 'price'
      },
      {
        label: <strong>QTY</strong>,
        field: 'qty'
      },
      {
        label: <strong>Amount</strong>,
        field: 'amount'
      },
      {
        label: '',
        field: 'button'
      }
  ],
  sum: 0
}

totalSum = (val) => {
    this.state.sum += Number(val);
}

render() {

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
        this.totalSum(row.qty * row.price);
      return rows.push(
        {
        'img': <img src={row.src} alt="" className="img-fluid z-depth-0" />,
        'name': [<h5 className="mt-3"><strong>{row.medName}</strong></h5>, <p className="text-muted">{row.shopName}</p>],
        'price': `₹ ${row.price}`,
        'qty':
        <>
            <select value={`${row.qty}`} className="mdb-select md-form" style={{ width: "100px" }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </>,
        'amount': <strong>₹ {row.qty * row.price}</strong>,
        'button':
        <a href="#">Remove</a>
        }
      )
      
    });

    return (
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
          <div className="row">
              <div className="col-9">
                <strong>Total Amount: {this.state.sum}</strong>
              </div>
              <div className="col-sm">
                  <a className="btn btn-outline-primary" role="button" href="#">Book Now</a>
              </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}

export default CartComponent;