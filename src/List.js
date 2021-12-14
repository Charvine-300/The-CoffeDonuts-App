import 'animate.css';
import './css/coffeeDonuts.css';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import BeanOn from './images/menuOnCoffee.png';
import DonutOn from './images/menuOnDonut.png';
import SpecialsOn from './images/menuOnSpecials.png';
import BeanOff from './images/menuOffCoffee.png';
import DonutOff from './images/menuOffDonut.png';
import SpecialsOff from './images/menuOffSpecials.png';
const List = () => {
  const [beans, setBeans] = useState([BeanOff, 'off']);
  const [donuts, setDonuts] = useState([DonutOff, 'off']);
  const [specials, setSpecials] = useState([SpecialsOn, 'on']);

  function changeOne() {
    setSpecials([SpecialsOn, 'on']);
    setBeans([BeanOff, 'off']);
    setDonuts([DonutOff, 'off']);
  }

  function changeTwo() {
    setBeans([BeanOn, 'on']);
    setDonuts([DonutOff, 'off']);
    setSpecials([SpecialsOff, 'off']);
  }

  function changeThree() {
    setDonuts([DonutOn, 'on']);
    setBeans([BeanOff, 'off']);
    setSpecials([SpecialsOff, 'off']);
  }

  return (  
    <div className="nav-wrapper">
      <div id="menu-flexbox" className="animate__animated animate__flipInX">
        <div className={`menu-options ${specials[1]}`}>
          <Link to='/menu'>
            <article onClick={changeOne} title="COffeeDonuts Specials" > 
              <img src={specials[0]} alt="Specials Menu" />
              <h2 className={specials[1]}> Specials </h2>
            </article>
          </Link>
        </div>
        <div className={`menu-options ${beans[1]}`}>
          <Link to='/menu/coffee'>
            <article onClick={changeTwo} title="Coffee Menu"> 
              <img src={beans[0]} alt="Coffee Menu" />
              <h2 className={beans[1]}> Coffee </h2>
            </article>
          </Link>
        </div>
        <div className={`menu-options ${donuts[1]}`}>
          <Link to='/menu/donuts'> 
            <article onClick={changeThree} title="Donuts Menu"> 
              <img src={donuts[0]} alt="Donuts Menu" />
              <h2 className={donuts[1]}> Donuts </h2>
            </article>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default List;