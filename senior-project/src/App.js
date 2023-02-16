import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, 
         Switch, 
         Route, 
         Redirect,} 
         from "react-router-dom"; /*Retrieved from https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/*/
import AdminSearch from './Components/AdminSearch';
import BasicForm from './Components/BasicForm';
import Adminhome from '/Components/Adminhome';
import AdminSettings from '/Components/AdminSettings';
const App = () => {
  return (
    <Login />
  );
};

const Login = () =>{
  return(
    <form>
      <Username />
      <Password />
      <button>Submit</button>
    </form>
)};

const Username = () =>{
  return(
  <div id='username'>
    <label htmlFor='username'></label>
    <input name='username' type='text'></input>
    </div>
  )};

const Password = ()=>{
  return(
    <div id='password'>
      <label htmlFor='password'></label>
      <input name='password' type='password'></input>
    </div>
  )
}

function SubmitButton(){
  const [] = useState();
}
export default App;
