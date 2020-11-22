import React, {Component} from 'react';
import * as d3 from "d3";
import './BarGraph.css'


function BarGraphForCurrentStock() {
    const svgHeight = 500;
     const svgWidth = 800;
     const paddingLeft = 10;
     const paddingRight = 30;
     const paddingBottom = 20;
     
     const initialCurrentStockPerMedicine = [350,50,150,600,200,400,100]
     const medicineNames = ['a','b','c','d','e','f','g']
     const [CurrentStockPerMedicine ,setCurrentStockPerMedicine] = React.useState(initialCurrentStockPerMedicine);//state for current available stocks per medicine
     const svgRef = React.useRef();
   
   
     React.useEffect( () => {

       const maxValueOfCurrentStockPerMedicine = Math.max(...initialCurrentStockPerMedicine);
       const highestYValueOfCurrentStockPerMedicine = maxValueOfCurrentStockPerMedicine+paddingBottom;
       const svg = d3.select(svgRef.current);
       // Scale band takes value specified in   
       // map arbitrary value to a range of linear values
       //Need to be explicit about what to map ex domain([0,1,2,3])
       // divide the values into equal bands
       const xScale = d3.scaleBand()
         .domain(CurrentStockPerMedicine.map((element, index) => medicineNames[index]))
         .range([paddingLeft, svgWidth-paddingRight])
         .padding(0.5); // Scalband() takes a padding to separate bands
       
       /**
        * adding ColorScale
        */
       const colorScale = d3.scaleLinear()
                       .domain([30,~~(highestYValueOfCurrentStockPerMedicine/2),highestYValueOfCurrentStockPerMedicine])
                       .range(["#C5EDAC","#F7A278","orange"])
                       .clamp(true); // forces values defined in the domain to remain thecolors
   
   
       const yScale = d3.scaleLinear()
                       .domain([0,highestYValueOfCurrentStockPerMedicine])
                       .range([svgHeight-paddingBottom, 0]);  
   
      
       const xAxis = d3.axisBottom(xScale).ticks(CurrentStockPerMedicine.length);
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
        .text("           \n\nMedicineName");

        // Y axis label:
        svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", svgWidth-paddingRight)
        .attr("x", -200)
        .text("Stocks")
   
     // Draw Bar
     svg.selectAll(".bar")
         .data(CurrentStockPerMedicine)
           .join('rect')
             .attr('class','bar')
   
             .attr('transform','scale(1, -1)')//flip the bar upside down to fix wron animation start
             .attr('x', (value,index) => xScale(medicineNames[index]))
             .attr('y', -svgHeight+paddingBottom)
             .attr('width', xScale.bandwidth()) // bandwidth equals to the width of one band
             .transition()//transition will animate attribute called after it
             .attr('fill',colorScale)  
             .attr('height',value => svgHeight - yScale(value) - paddingBottom);  
   
     },[CurrentStockPerMedicine,initialCurrentStockPerMedicine]);
   
     return (<React.Fragment>
           
                <svg width={svgWidth} height={svgHeight} ref={svgRef} className = "designAxis">
                    <g className="x-axis"/>
                    <g className="y-axis"/>
                </svg>
           <br/>
           <div className="button-container">
                <button onClick={ () => setCurrentStockPerMedicine(CurrentStockPerMedicine.map( value => value))} >Current Stocks Per Medicine</button>
           </div>
         </React.Fragment>);
   }

export default BarGraphForCurrentStock;