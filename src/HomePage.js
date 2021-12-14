import Cart from './Cart';
import Menu from './Menu';
import Navbar from './NavBar';
import './css/coffeeDonuts.css';
import Welcome from './Welcome';
import CheckOut from './CheckOut';
import ScrollToTop from './ScrollToTop';
import { useState, React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const HomePage = ({ saveUser }) => {

  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [moreThanOne, setMoreThanOne] = useState(1);
  const [checkoutHide, setCheckoutHide] = useState('');

  function hideComponent() {
    setCheckoutHide('display');
  }
  function showComponent() {
    setCheckoutHide('');
  }

  function addToCart() {
    setCount(count + 1);
  }

  function addDonuts(dough) {
    dough['itemCount'] = moreThanOne;
    setMoreThanOne(dough.itemCount = 1);
    setCartItems([...cartItems, dough]);
    setTotalPrice(totalPrice + dough.price);
  }

  function addSpecials(special) {
    special['itemCount'] = moreThanOne;
    setMoreThanOne(special.itemCount = 1);
    setCartItems([...cartItems, special]);
    setTotalPrice(totalPrice + special.price);
  }

  function addCoffee(coff) {
    coff['itemCount'] = moreThanOne;
    setMoreThanOne(coff.itemCount = 1);
    setCartItems([...cartItems, coff]);
    setTotalPrice(totalPrice + coff.price);
  }
  
  return (  
    <Router>
      <div className="coffee-menu">
        <ScrollToTop />
        <Navbar itemNo={count} hide={checkoutHide} />
        <Switch> 
          <Route exact path="/menu">
            <Welcome />
          </Route>
          <Route path="/menu/cart">
            <Cart hideFunction={hideComponent} setItems={setCount} items={count} setMoreThanOne={setMoreThanOne} username={saveUser} cartList={cartItems} newCartList={setCartItems} price={totalPrice} deductPrice={setTotalPrice} />
          </Route>
          <Route exact path="/checkout">
           <CheckOut show={showComponent} />
         </Route>
        </Switch>
        <Menu hide={checkoutHide} donutItems={addDonuts} specialsItems={addSpecials} coffeeItems={addCoffee} cartAlert={addToCart} />
      </div>
    </Router>
  );
}
 
export default HomePage;