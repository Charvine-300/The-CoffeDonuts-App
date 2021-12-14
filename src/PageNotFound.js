import 'animate.css';
import './css/Login.css';
import React from 'react';
import './css/coffeeDonuts.css';
import { Link } from 'react-router-dom';
import NotFound from './images/404Page.svg';

const PageNotFound = () => {

  return(
    <div className="checkout-container" id="not-found">
      <div className="checkout-box animate__animated animate__bounce" id="transparent">
        <div className="flexbox padding-layer column">
          <img src={NotFound} alt="Error: 404" title="Page Not Found" />
          <h1> Page Not Found </h1>
          <div className="button-holder error-btn">
            <button type="submit"> <Link to='/menu'> Back To Menu </Link> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;