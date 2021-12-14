import 'animate.css';
import React from 'react';
import './css/menu.css';

const Donut = ({ donut, alert, items }) => {
  return (
    <section className="menu-wrapper">
      {donut.map((dough) => (
        <div className="coffee-shows animate__animated animate__zoomIn" key={dough.id}>  
          <div className="coffee-container">
            <div className="coffee-photos">
              <img src={dough.item} alt={dough.title} />
            </div>
            <div className="space side-off">
              <h3> {dough.title} </h3>
              <p> ${dough.price} </p>
            </div>
            <div className="plus-sign" onClick={alert}>
              <img src={dough.insert} alt="Add To Cart" onClick={() => {items(dough)}} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Donut;