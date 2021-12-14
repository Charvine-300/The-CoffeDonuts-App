import 'animate.css';
import './css/coffeeDonuts.css';
import { Link } from 'react-router-dom';
import { React } from 'react';
import blueCart from './images/blueCart.png';
import blueDonut from './images/blueDonut.png';
import blueCoffee from './images/blueCoffee.png';


const Navbar = ({ showFunction, hide, itemNo }) => {

  return (  
    <div className={`nav-wrapper fixed ${hide}`}>
      <div className="header-logo animate__animated animate__slideInDown">
        <div className="header-flexbox">
          <img src={blueCoffee} alt="Coffee Logo" title="Coffee Logo" />
          <span id="header-fit"></span>
          <img src={blueDonut} alt="Donut Logo" title="Donut Logo" />
        </div>
        <h1> CoffeeDonuts </h1>
        <Link to="/menu/cart">
          <div className="header-flexbox float">
            <div className="green-light">
              <p> {itemNo}  </p> 
            </div>
            <img src={blueCart} alt="Cart Section Logo" title="Go To Cart" />
          </div>
        </Link>
      </div>  
    </div>
  );
}
 
export default Navbar;
