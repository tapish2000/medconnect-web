import React from 'react';
import BarGraphForProfit from './BarGraphForProfit';
import BarGraphForStock from './BarGraphForStock'
import SafetyStockTable from './SafetyStockTable'
import ProgressBar from './ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
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
          // <div className = "dashBoardDesign">
          
              
          // </div>
          <div style={{marginBottom : "600px"}}>
              <div>
                <h1 className = "block">DashBoard</h1>
              </div>
              <div className = "dashBoardDesign">
            
            <Container className = "containerOfDashBoard" >
                <Row className = "rowOfDashBoard">
                  <div className = "BarGraph">
                    <Col>
                      <div>
                        <BarGraphForProfit />
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <BarGraphForStock />
                      </div>
                    </Col>
                </div>
                  
                  
                </Row>
                <Row className="rowOfDashBoard">
                  <div className = "row2">
                    <Col className="stock">
                      <div>
                          <SafetyStockTable />
                      </div>  
                    </Col>
                    <Col>
                      <div className = "designProgressBar">
                          <ProgressBar />
                      </div>
                    </Col>
                  </div>
                </Row>
            </Container>
          </div>
          </div>

          

        )
      }
}


export default DashBoard; 