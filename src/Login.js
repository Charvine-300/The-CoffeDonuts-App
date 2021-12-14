import 'animate.css';
import './css/Login.css';
import { useState, React } from 'react';
import Donut from './images/whiteDonut.png';
import Coffee from './images/whiteCoffee.png';
import { useHistory } from 'react-router-dom';


const Login = ({ userName, password, savePassword, saveUser }) => {
  
  const [validate, setValidate] = useState(false);
  const [validate2, setValidate2] = useState(false);
  const history = useHistory();

  const  formValidate = (e) => {
    e.preventDefault();
    console.log("Play ball!");
    if (saveUser === "" && savePassword === "") {
      setValidate(true);
      setValidate2(true);
    }
    else if (saveUser === "") {
      setValidate(true);
      setValidate2(false);
    }
    else if (savePassword === "") {
      setValidate(false);
      setValidate2(true);
    }
    else {
      history.push('/menu');
    }
  }
  

  return (  
    <div className="login-space animate__animated animate__fadeIn">
      <div className="small-box">
        <header className="App-header">
          <div className="App-logo">
            <div className="entrance-logo animate__animated animate__fadeInUp">
              <div className="flexbox">
                <img src={Coffee} alt="Coffee Logo" />
                <span id="cross-fit"></span>
                <img src={Donut} alt="Donut Logo" />
              </div>
            </div>
            <h1 className="animate__animated animate__fadeInUp"> CoffeeDonuts </h1>
            <form action="" name="coffeeDonuts" className="animate__animated animate__fadeIn" onSubmit={(e) => {formValidate(e)}}>
              <label htmlFor="username"> Name: </label> <br/>
              <input type="text" id="username" name="username" aria-required="true" onBlur={(e) => userName(e)} />
              { validate && <p> This field is required </p> }
              <label htmlFor="password"> Password: </label> <br/> 
              <input type="password" name="password" aria-required="true" onBlur={(e) => {password(e)}} />
              { validate2 && <p> This field is required </p> }
              <button type="submit" value="Submit" >  Sign In </button>       
            </form>
          </div>
        </header>
      </div>
    </div>
  );
}
 
export default Login;