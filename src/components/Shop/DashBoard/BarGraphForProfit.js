import React, { Component } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import './Graph.css'
import BarGraphForProfitData from './BarGraphForData'

class BarGraphForProfit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        "graphset":[
            {
                "type":"bar3d",
                title: {
                  text: "Profit/Loss vs Month"
                },
                subtitle: {
                  text: "Displays Profit / Loss per month of a shopOwner"
                },
                "series":[
                    {
                        "bar-width": "50%",
                        "values":this.getProfit(BarGraphForProfitData.profit)
                    },
                    {
                      "values":this.getLoss(BarGraphForProfitData.profit) //values for buffer stock
                    }
                    
                ],
                'scale-x': {
                  
                  label: {
                    text: "Month / Year"
                  },
                  step: "1month",
                  transform: {
                    type: "date",
                    all: "%m/%Y"
                  },
                  'min-value':1606079310172,
                  item: {
                    'font-size': 10
                  },
                  guide: {
                    visible: true,
                    'line-color': "black",
                    'line-style': "dotted",
                    alpha: 1
                  },
                  "max-items":12,
                  "zooming":true,
                  "zoom-to-values":[1606079310172,1606071000009]
                },
                utc: true,
                timezone: 0,
              'scale-y': {
                
                label: {
                  text: "Profit / Loss (Rs)"
                },
                item: {
                  'font-size': 8
                },
                
              },
                "scroll-x":{
        
                },
              "crosshair-x":{
                "line-width":"100%",
                "alpha":0.3,
                "plot-label":{
                    "text":"Blue shows profit in Rs<br>Red shows loss in Rs",
                    "decimals":2,
                    "multiple":true,
                    "placement":"node-top",
                    "offset-y":-7,
                },
                "scale-label":{
                  "text":"%v",
                  "transform":{
                    "type":"date",
                    "all":"Month: %m<br>Year: %y"
                  }
                }
              }
            }
        ]
    }
    };
    this.chart = React.createRef();
  }

  getProfit = (profitArray)=>{
    let newProfitArray = [];

    for(let i=0;i<profitArray.length;i++){
      if(profitArray[i]>=0){
        newProfitArray.push(profitArray[i]);
      }else{
        newProfitArray.push(0);
      }
    }
    return newProfitArray

  }

  getLoss = (lossArray)=>{
    let newLossArray = [];

    for(let i=0;i<lossArray.length;i++){
      if(lossArray[i]<=0){
        newLossArray.push(-lossArray[i]);
      }else{
        newLossArray.push(0);
      }
    }
    return newLossArray

  }

  render() {
    return (
        <div className="crazy">
            <div className="crazy__bg"></div>
            <div className="crazy__overlay cover"></div>
            <div className="crazy__info cover">
                <div className="designBarGraph">
                    <ZingChart id = "myChart" ref={this.chart} data={this.state.config} style={{overflow:"inherit"}} />
                </div> 
            </div>
        </div>
      
    );
  }
}



export default BarGraphForProfit;
