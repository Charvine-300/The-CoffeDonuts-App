import 'animate.css';
import './css/menu.css';
import React from 'react';


const Coffee = ({ coffee, alert, items }) => {
  return (
    <section className="menu-wrapper">
      {coffee.map((coff) => (
        <div className="coffee-shows animate__animated animate__zoomIn" key={coff.id}>
          <div className="coffee-container">
            <div className="coffee-photos">
              <img src={coff.item} alt={coff.title} />
            </div>
            <div className="space side-off">
              <h3> {coff.title} </h3>
              <p> ${coff.price} </p>
            </div>
            <div className="plus-sign" onClick={alert} >
              <img src={coff.insert} alt="Add To Cart" onClick={() => {items(coff)}}/>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Coffee;