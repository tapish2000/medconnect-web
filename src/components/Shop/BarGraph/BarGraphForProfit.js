import React, {Component} from 'react';
import * as d3 from "d3";
import './BarGraph.css'


function BarGraphForProfit() {
    const svgHeight = 500;
     const svgWidth = 800;
     const paddingLeft = 10;
     const paddingRight = 30;
     const paddingBottom = 20;
     const initialProfitPerMonthData = [35,5,15,60,20,40,10,75,60,32,10,600];
     const monthData = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    //  const randomData = [...Array(10)].map(element=>~~(Math.random()*125)); //
     const [ProfitPerMonthData, setProfitPerMonthData] = React.useState(initialProfitPerMonthData); //state for profit per month graph 
     
     const svgRef = React.useRef();
   
   
     React.useEffect( () => {
       const maxValueOfProfitPerMonth = Math.max(...initialProfitPerMonthData);
       const highestYValueOfProfitPerMonth = maxValueOfProfitPerMonth+paddingBottom;

       const svg = d3.select(svgRef.current);
       // Scale band takes value specified in   
       // map arbitrary value to a range of linear values
       //Need to be explicit about what to map ex domain([0,1,2,3])
       // divide the values into equal bands
       const xScale = d3.scaleBand()
         .domain(monthData.map((element, index) => element))
         .range([paddingLeft, svgWidth-paddingRight])
         .padding(0.5); // Scalband() takes a padding to separate bands
       
    
       const colorScale = d3.scaleLinear()
                       .domain([30,~~(highestYValueOfProfitPerMonth/2),highestYValueOfProfitPerMonth])
                       .range(["#C5EDAC","#F7A278","orange"])
                       .clamp(true); // forces values defined in the domain to remain thecolors
   
   
       const yScale = d3.scaleLinear()
                       .domain([0,highestYValueOfProfitPerMonth])
                       .range([svgHeight-paddingBottom, 0]);  
   
      
       const xAxis = d3.axisBottom(xScale).ticks(ProfitPerMonthData.length);
       svg.select(".x-axis")
           .style('transform',` translateY(${svgHeight-paddingBottom}px)` )
           .call(xAxis);
   
      const yAxis = d3.axisRight(yScale);
      svg.select(".y-axis")
               .style('transform',` translateX(${svgWidth-paddingRight}px)` )
               .call(yAxis);

      // Add X axis label:
        svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", 400)
        .attr("y", svgHeight+20)
        .text("           \n\nMonth");

        // Y axis label:
        svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", svgWidth-paddingRight)
        .attr("x", -200)
        .text("Profit")
   
     // Draw Bar
     svg.selectAll(".bar")
         .data(ProfitPerMonthData)
           .join('rect')
             .attr('class','bar')
   
             .attr('transform','scale(1, -1)')//flip the bar upside down to fix wron animation start
             .attr('x', (value,index) => xScale(monthData[index]))
             .attr('y', -svgHeight+paddingBottom)
             .attr('width', xScale.bandwidth()) // bandwidth equals to the width of one band
             .transition()//transition will animate attribute called after it
             .attr('fill',colorScale)  
             .attr('height',value => svgHeight - yScale(value) - paddingBottom);  
   
     },[ProfitPerMonthData,initialProfitPerMonthData]);
   
     return (<React.Fragment>
           
                <svg width={svgWidth} height={svgHeight} ref={svgRef} className = "designAxis">
                    <g className="x-axis"/>
                    <g className="y-axis"/>
                </svg>
           <br/>
           <div className="button-container">
                <button onClick={() => setProfitPerMonthData(ProfitPerMonthData.map(value => value ))}>Profit Per Month</button>
           </div>
         </React.Fragment>);
   }

export default BarGraphForProfit;