import React, { Component } from "react";
import "zingchart/es6";
import ZingChart from "zingchart-react";
import './Graph.css'
import BarGraphForStockData from './BarGraphForData' // this data means buffer stock and remaining stock of every medicine

class BarGraphForStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        "graphset":[
            {
                "type":"bar3d",
                title: {
                  text: "In Hand Stock / Buffer Stock per Month"
                },
                subtitle: {
                  text: "Displays inHand(remaining) stocks as well as buffer stock of a particular month"
                },
                "series":[
                    {
                        
                        "values":BarGraphForStockData.remainingStock,
                        'background-color': "#e6df17"
                    },
                    {
                       "bar-width": "50%",
                      "values":BarGraphForStockData.bufferStock, 
                      'background-color': "#ab0066 #ff0078"
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
                  text: "Stocks (medicine)"
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
                    "text":"Yellow shows inHand stock<br>Pink shows Buffer stock",
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
  
  

  render() {
    return (
        <div className="crazy1">
            <div className="crazy1__bg"></div>
            <div className="crazy1__overlay cover"></div>
            <div className="crazy1__info cover">
                <div className="designBarGraph">
                    <ZingChart id = "myChart1" ref={this.chart} data={this.state.config} style={{overflow:"inherit"}} />
                </div> 
            </div>
        </div>
      
    );
  }
}



export default BarGraphForStock;
