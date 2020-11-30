import React, {useState} from 'react';
import { Grid } from 'gridjs-react';
import Spinner from 'react-bootstrap/Spinner';
import SafetyStockTableData from './BarGraphForData'
import './Graph.css'


function SafetyStockTable(props) {
    
    const [data, setData] = useState(props.safetyStock);
    const [loading, setLoading] = useState(false);

    const options = {
        'search': {
          'placeholder': '🔍 Search using medicine name...'
        },
        'pagination': {
          'previous': '⬅️',
          'next': '➡️',
          'showing': '👓 Displaying',
          'results': () => 'Records'
        }
      }

      console.log(props.safetyStock);
    
    return (
      <div>

        {loading ? (
          <div className="SpinnerDiv">
            <Spinner
              animation="border"
              variant="primary"
              style={{ margin: 'auto' }}
            />
            <div style = {{textAlign:"center"}}>All stocks are upright </div>
          </div>
        ):(
            
                            <div className="designTable">
                                <Grid
                                    data={data}
                                    className="table-body"
                                    columns={['Medicine Name', 'Remaining Stocks', 'Threshold value']}
                                    search={true}
                                    sort={true}
                                    pagination={{
                                        limit: 5,
                                        enabled:true
                                    }}
                                    language={options}
                                />
                            </div>

            
        )}

        
      </div>
    );
  }

export default SafetyStockTable;