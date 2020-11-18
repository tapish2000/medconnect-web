import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import ShopCardComponent from './ShopCardComponent'

function ShopCards(props) {
  const [Medicines, setMedicines] = useState(null);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
    axios
      .get('https://glacial-caverns-39108.herokuapp.com/medicine/' + props.medicineId)
      .then((response) => {
        console.log(response);
        setMedicines(response.data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.medicineId]);

    return (
			<>
				{loading ? (
					<div className="SpinnerDiv">
						<Spinner
							animation="border"
							variant="primary"
							style={{ margin: 'auto' }}
						/>
					</div>
				) : (
				<Col md={3} className="mt-3 mb-3">
						<ShopCardComponent
						Key={Medicines._id}
						imgsrc={Medicines.image_url}
						title={Medicines.name}
						price={Medicines.price}
						link="/medicinedetails"
						id=""
						/>
				</Col>
				)}
			</>
    );
}

export default ShopCards;