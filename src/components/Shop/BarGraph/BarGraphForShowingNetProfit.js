import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right'
  }


    

  render(){
    return (
      <div className="chart" style = {{display:"flex",justifyContent:"center"}}>
          
        <div style = {{width:'45%',overflow:"scroll"}}>
        {/* <ScrollView horizontal={true}> */}
            <Bar
            data={this.state.chartData}
            options={{
                responsive:true,
                title:{
                display:this.props.displayTitle,
                text:'Profit Per Month',
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                },
                scales: {
                    yAxes: [
                      {
                        ticks: {
                          callback: function(label, index, labels) {
                            return "Profit is "+label
                          }
                        }
                      }
                    ]
                  },
                  
            }}
            />
        {/* </ScrollView> */}
        </div>    

        
      </div>
    )
  }
}

export default Chart;