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
import Login from './Components/Login';

const App = ()=>{
  return(
    <>
      <router>
        <switch>
          <route exact path='/' component={Login} />
          <route path='/components/' component={AdminSearch} />
          <route path='/components/' component={BasicForm} />
          <route path='/components/' component={Adminhome} />
          <route path='/components/' component={AdminSettings} />
          <redirect to='/' />
        </switch>
      </router>
    </>
  )
};

export default App;
