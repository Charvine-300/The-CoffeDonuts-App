import 'animate.css';
import './css/menu.css';
import React from 'react';


const Specials = ({ specials, alert, items }) => {
  return (  
    <section className="menu-wrapper">
      {specials.map((special) => (
        <div className="special-shows animate__animated animate__zoomIn" key={special.id}>
          <div className="img-container">
            <img src={special.item} alt={special.title} title={special.title} className="test-image"/>
            <div className="add-to-cart" onClick={alert}>
              <img src={special.insert} alt="Add To Cart" onClick={() => {items(special)}}/>
            </div>
          </div>
          <div className="special-items">
            <section className="space">
              <h3> {special.title} </h3>
              <div className="ratings">
                <img src={special.star} alt="Rating Star" />
                <img src={special.star} alt="Rating Star" />
                <img src={special.star} alt="Rating Star" />
                <img src={special.star} alt="Rating Star" />
                <img src={special.star} alt="Rating Star" />
              </div>
              <p> {special.description} </p>
            </section>
          </div>
        </div>
      ))}
    </section>
  );
}
 
export default Specials;