import React from 'react';
import BarGraphForProfit from './BarGraphForProfit';
import BarGraphForStock from './BarGraphForStock'
import SafetyStockTable from './SafetyStockTable'
import ProgressBar from './ProgressBar';
import './DashBoardComponent.css'

class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{}
        }
      }

      

   

      render(){
        return (
          <>
          <div>
            <h1 className = "block">DashBoard</h1>
          </div>
            <div className = "BarGraph">
                <div>
                   <BarGraphForProfit />
                   <div id = "table">
                      <SafetyStockTable />
                   </div>
                </div>
                <div>
                   <BarGraphForStock />
                   <div className = "designProgressBar">
                      <ProgressBar />
                   </div>
                </div>
            </div>
          </>
        )
      }
}


export default DashBoard;