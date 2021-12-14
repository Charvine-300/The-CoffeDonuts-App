import 'animate.css';
import './css/Login.css';
import Login from './Login';
import { useState } from 'react';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [saveUser, setSaveUser] = useState('');
  const [savePassword, setSavePassword] = useState('');

  function userName(e) {
    console.log(e.target.value);
    setSaveUser(e.target.value);
  }

  function passWord(e) {
    console.log(e.target.value);
    setSavePassword(e.target.value);
  }
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login userName={userName} password={passWord} saveUser={saveUser} savePassword={savePassword} />
          </Route>
          <Route exact path="/menu">
            <HomePage saveUser={saveUser} />
         </Route>
         <Route path="*">
           <PageNotFound />
         </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
