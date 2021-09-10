import React from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import Work from "./components/Work";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import AboutPage from "./components/AboutPage";

function App() {
  return (
      <Router>
          <div className="App">
                  <SideBar />
                   <Switch>
                       <Route path="/" component={HomePage} exact></Route>
                       <Route path="/about" component={AboutPage}></Route>
                       <Route path="/work" component={Work} ></Route>
                  
                   </Switch>


          </div>
      </Router>
  );
}

export default App;
