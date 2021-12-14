import './css/index.css';
import './css/Login.css';
import './css/coffeeDonuts.css';
import Donut from './images/whiteDonut.png';
import Coffee from './images/whiteCoffee.png';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CheckOut = ({ showFunction }) => {
  const [brewTime, setBrewTime] = useState(false);
  useEffect(() => {
    setTimeout(() => {setBrewTime(true)}, 10000);
  });


  return(
    <div className="checkout-container animate__animated animate__fadeIn">
      { brewTime && <div className="checkout-box">
          <div className="flexbox padding-layer">
            <img src={Coffee} alt="Coffee Logo" />
            <span id="cross-fit" className="checkout-spin"></span>
            <img src={Donut} alt="Donut Logo" />
          </div>
          <h1> Ready For Pickup! </h1>
          <div className="button-holder error-btn">
            <button type="submit" onClick={showFunction}> <Link to='/'> Login </Link> </button>
          </div>
        </div>
      }
      {!brewTime && <div className="checkout-box">
          <div className="flexbox padding-layer">
            <img src={Coffee} alt="Coffee Logo" className="image-spin" />
            <span id="cross-fit" className="checkout-spin"></span>
            <img src={Donut} alt="Donut Logo" className="image-spin" />
          </div>
          <h1> Brewing... </h1>
        </div>  
      }
    </div>
  );
}

export default CheckOut;