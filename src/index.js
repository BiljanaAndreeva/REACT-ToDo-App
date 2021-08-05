import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassComp from './components/ClassComp';
import FunctionalComp from './components/FunctionalComp';

//pages
import Home from './pages/Home';
import About from './pages/About';
import ToDo from './pages/ToDo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
       <Switch>
       <Route path="/ToDo">
            <ToDo />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
         
    </Router>
      
  
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
