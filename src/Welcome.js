import 'animate.css';
import React from 'react';
import './css/coffeeDonuts.css';
import D1 from './images/D1.jpg';
import D2 from './images/D2.jpg';
import D3 from './images/D3.jpg';
import D4 from './images/D4.jpg';
import D5 from './images/D5.jpg';
import D6 from './images/D6.jpg';
import C1 from './images/C1.jpg';
import C2 from './images/C2.jpg';
import C3 from './images/C3.jpg';
import C4 from './images/C4.jpg';
import C5 from './images/C5.jpg';
import C6 from './images/C6.jpg';
import CD from './images/CD.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Welcome = () => {
  return ( 
    <div className="nav-wrapper border-bop animate__animated animate__slideInLeft">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="8000">
            <img src={C1} className="d-block w-100" alt="Slide 1" title="Cup of Coffee" /> 
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={D1} className="d-block w-100" alt="Slide 2" title="Donut Display" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={C2} className="d-block w-100" alt="Slide 3" title="French Pressed Coffee" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={D2} className="d-block w-100" alt="Slide 4" title="Donut in Progress" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={C3} className="d-block w-100" alt="Slide 5" title="Frapuccinos" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={D3} className="d-block w-100" alt="Slide 6" title="Donuts and Milk" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={C4} className="d-block w-100" alt="Slide 7" title="Brewing Coffee" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={D4} className="d-block w-100" alt="Slide 8" title="Donut Display II" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={C5} className="d-block w-100" alt="Slide 9" title="Coffee Grounds" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={D5} className="d-block w-100" alt="Slide 10" title="Plate of Donuts" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={C6} className="d-block w-100" alt="Slide 11" title="Coffee Aesthetic" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={D6} className="d-block w-100" alt="Slide 12" title="Resturant Setup" />
          </div>
          <div className="carousel-item" data-bs-interval="8000">
            <img src={CD} className="d-block w-100" alt="Slide 13" title="Coffee Dounts :)" />
          </div>
        </div>
        {/*<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>*/}
      </div>
    </div>
  );
}
 
export default Welcome;