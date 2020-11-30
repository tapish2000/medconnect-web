import React, { Component } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import './Graph.css'
// import BarGraphForProfitData from './BarGraphForData'






class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {config:{
      type: "pie", 
      plot: {
        borderColor: "#2B313B",
        borderWidth: 5,
        // slice: 90,
        valueBox: {
          placement: 'out',
          text: '%t\n%npv%',
          fontFamily: "Open Sans"
        },
        tooltip:{
          fontSize: '18',
          fontFamily: "Open Sans",
          padding: "5 10",
          text: "%npv%"
        },
        animation:{
         effect: 2, 
         method: 5,
         speed: 900,
         sequence: 1,
         delay: 3000
       }
      },
      source: {
        text: 'gs.statcounter.com',
        fontColor: "#8e99a9",
        fontFamily: "Open Sans"
      },
      title: {
        fontColor: "#8e99a9",
        text: 'Order Tracking (Last 30 days)',
        align: "center",
        offsetX: 10,
        fontFamily: "Open Sans",
        fontSize: 25
      },
      subtitle: {
        offsetX: 10,
        offsetY: 10,
        fontColor: "#8e99a9",
        fontFamily: "Open Sans",
        fontSize: "16",
        align: "center"
      },
      plotarea: {
        margin: "20 0 0 0"  
      },
     series : [
       {
         values : [this.props.progress.waitingOrders],
         text: "Waiting orders",
         backgroundColor: '#50ADF5',
       },
       {
         values: [this.props.progress.deliveredOrders],
         text: "Delivered orders",
         backgroundColor: '#FF7965',
         detached:true
       },
       {
         values: [this.props.progress.expiredOrders],
         text: 'Expired orders',
         backgroundColor: '#FFCB45',
         detached:true
       },
       {
         text: 'Confirmed Orders',
         values: [this.props.progress.confirmedOrders],
         backgroundColor: '#6877e5'
       },
     ]
   }}
   

    this.chart = React.createRef();
  }

  

  render() {
    return (
        <div className="crazy3" style={{height:"64vh",width:"44vw",marginLeft:"9%"}}>
            <div className="crazy3__bg"></div>
            <div className="crazy3__overlay cover"></div>
            <div className="crazy3__info cover">
                <div className="designPieChart">
                    <ZingChart id = "myChart3" ref={this.chart} data={this.state.config} style={{overflow:"inherit"}} />
                </div> 
            </div>
        </div>
      
    );
  }
}



export default PieChart;
