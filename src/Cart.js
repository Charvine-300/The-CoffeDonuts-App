import 'animate.css';
import './css/menu.css';
import './css/coffeeDonuts.css';
import { useEffect, React } from 'react';
import { Link } from 'react-router-dom';



const Cart = ({ hideFunction, setItems, items, username, cartList, price, setMoreThanOne, newCartList, deductPrice }) => {
  useEffect(() => {
    console.log("change made");
  });

  function increment(item) {
    setMoreThanOne(item.itemCount += 1); 
  }
  function decrement(item) {
    var itemID = item.id;
    if (item.itemCount === 1) {
      const newCart = cartList.filter((material) => {
        return material.id !== itemID;
      });
      deductPrice(price - item.price);
     newCartList(newCart);
     setItems(items - 1);
     console.log(cartList);
    }
    else {
      setMoreThanOne(item.itemCount -= 1);
    }
  }

  return ( 
    <div className="nav-wrapper coff-do animate__animated animate__slideInRight" id="side-by-side">
      <h1> {username}'s Order </h1>
      {cartList.length === 0 && <p id="no-items"> No Items in Cart </p>}
      {cartList.length !== 0 && cartList.map((item) => (
        <div className="coffee-shows cart-space animate__animated animate__slideInUp" key={item.id}>  
          <div className="coffee-container cart-holder">
            <div className="coffee-photos cart-photos">
              <img src={item.item} alt={item.title} />
            </div>
            <div className="space side-off one-off">
              <h3> {item.title} </h3>
              <p> ${item.price} </p>
            </div>
            <div className="increment-spot">
              <div className="plus-sign minus-sign" onClick={() => {increment(item)}}>
                <img src={item.cart} alt="Increase Item" />
              </div>
              <p> x{item.itemCount} </p>
              <div className="plus-sign minus-sign" onClick={() => {decrement(item)}}>
                <img src={item.remove} alt="Decrease Item" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <h1 id="total-display"> Total: ${price} </h1>
      <div className="button-holder">
        <button type="submit"> <Link to='/menu'> Menu </Link> </button>
        <button type="submit" onClick={hideFunction}> <Link to='/checkout'>  Place Order </Link> </button>
      </div>
    </div>
  );
}
 
export default Cart;