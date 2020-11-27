import React, { Component } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import './Graph.css'
import BarGraphForProfitData from './BarGraphForData'






class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        "type":"pie3d",
        "title":{
          "text":"Progress"
        },
        "series":[
          {"values":[59]},
          {"values":[55]},
          {"values":[30]},
          {"values":[28]}
        ]
      }
    };
    this.chart = React.createRef();
  }

  

  render() {
    return (
        <div className="crazy3">
            <div className="crazy3__bg"></div>
            <div className="crazy3__overlay cover"></div>
            <div className="crazy3__info cover">
                <div className="designPieChart">
                    <ZingChart id = "myChart2" ref={this.chart} data={this.state.config} style={{overflow:"inherit",height:"100%"}} />
                </div> 
            </div>
        </div>
      
    );
  }
}



export default PieChart;
