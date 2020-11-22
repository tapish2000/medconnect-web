import React from 'react';
// import BarGraphForShowingNetProfit from '../BarGraph/BarGraphForShowingNetProfit.js';
import BarGraphForProfit from '../BarGraph/BarGraphForProfit';
import BarGraphForCurrentStocks from '../BarGraph/BarGraphForCurrentStocks';

class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
      }

      

    //   componentWillMount(){
    //       this.getChartData();
    //   }

    //   getChartData=()=>{
    //     // Ajax calls here
    //     this.setState({
    //       chartData:{
    //         labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    //         datasets:[
    //           {
    //             label:'Month',
    //             data:[
    //               617594,
    //               181045,
    //               153060,
    //               106519,
    //               105162,
    //               95072,
    //               124,
    //               8900,
    //               4566,
    //               4333,
    //               23456,
    //               4590
    //             ],
    //             barThickness: 30,
    //             maxBarThickness: 50,
    //             backgroundColor:[
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)'
    //             ]
                
    //           },
              
              
    //         ]
    //       }
    //     });
    //   }

    // componentDidMount=()=>{
    //     this.getChartData();
    // }


      render(){
        return (
          <>
            
            <div >


                
                <BarGraphForProfit />
                <BarGraphForCurrentStocks />

            </div>
            
                
          </>
        )
      }
}


export default DashBoard;