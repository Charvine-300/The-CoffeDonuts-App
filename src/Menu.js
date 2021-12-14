import 'animate.css';
import './css/menu.css';
import List from './List';
import data from './data';
import Donut from './Donut';
import Coffee from './Coffee';
import PageNotFound from './PageNotFound';
import Specials from './Specials';
import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Menu = ({  hide, cartAlert, specialsItems, donutItems, coffeeItems }) => {

  return (  
    <Router>
      <div className={`coffee-menu ${hide}`}>  
        <List />
        <Switch>
          <Route exact path="/menu">
            <Specials alert={cartAlert} items={specialsItems} specials={data.setItems.filter((special) => special.name === "specials")} />
          </Route>
          <Route path="/menu/coffee">
            <Coffee alert={cartAlert} items={coffeeItems} coffee={data.setItems.filter((coffee) => coffee.name === "coffee")} />
          </Route>
          <Route path="/menu/donuts">
            <Donut alert={cartAlert} items={donutItems} donut={data.setItems.filter((donut) =>donut.name === "donut")} />
          </Route>
          <Route path="*">
           <PageNotFound />
         </Route>
        </Switch>
      </div>
    </Router>
  );
}
 
export default Menu;