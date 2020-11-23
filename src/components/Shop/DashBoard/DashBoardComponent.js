import React from 'react';
import BarGraphForProfit from './BarGraphForProfit';
import BarGraphForStock from './BarGraphForStock'
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
                </div>
                <div>
                   <BarGraphForStock />
                </div>
              
            </div>
          </>
        )
      }
}


export default DashBoard;