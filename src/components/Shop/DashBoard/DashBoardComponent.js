import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarGraphForProfit from './BarGraphForProfit';
import BarGraphForStock from './BarGraphForStock'
import SafetyStockTable from './SafetyStockTable'
import ProgressBar from './ProgressBar';
import PieChart from './PieChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';
import './DashBoardComponent.css'
import { reactLocalStorage } from 'reactjs-localstorage';


const DashBoard = ()=>{
  const [getGraphData, setGraphData] = useState([]);
  const [loading, setLoading] = useState(true);

  const shopId = reactLocalStorage.get('id');

  useEffect(() => {
    
    axios
      .get('https://glacial-caverns-39108.herokuapp.com/shop/dashboard/' + shopId)
      .then((response) => {
        console.log(response.data);
        setGraphData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
        return (
          <div>
            {loading ? (
                <div className="SpinnerDiv">
                  <Spinner
                    animation="border"
                    variant="primary"
                    style={{ margin: 'auto' }}
                  />
                </div>
          ):(
          <div style={{marginBottom : "600px"}}>
              <div>
                <div>
                  <h1 className = "block">DashBoard</h1>
                </div>
                <div className = "dashBoardDesign">
                  <Container className = "containerOfDashBoard" >
                      <Row className = "rowOfDashBoard">
                        <div className = "BarGraph">
                          <Col>
                            <div>
                              <BarGraphForProfit profit={getGraphData.profit}/>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <BarGraphForStock inHandStock={getGraphData.inHandStock} deadStock={getGraphData.deadStock}/>
                            </div>
                          </Col>
                      </div>
                        
                        
                      </Row>
                      <Row className="rowOfDashBoard">
                        <div className = "row2">
                          <Col className="stock">
                            <div>
                                <SafetyStockTable safetyStock={getGraphData.safetyStock}/>
                            </div>  
                          </Col>
                          <Col>
                            <div>
                                <PieChart progress={getGraphData.progress}/>
                            </div>
                          </Col>
                        </div>
                      </Row>
                  </Container>
              </div>
            </div>
          </div>
          )}
        </div>

          

        )
      
}


export default DashBoard; 
