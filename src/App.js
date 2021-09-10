import React, {lazy, Suspense } from 'react';
import './App.css';
import SideBar from "./components/SideBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
} from "react-router-dom";
const HomePage = lazy (()=> import ('./components/HomePage'));
const Work = lazy(()=> import ('./components/Work'));
const AboutPage = lazy(()=> import ('./components/AboutPage'))
function App() {
  return (
      <Router>
          <div className="App">
                  <SideBar />
                   <Switch>
                       <Suspense fallback = {<h1> loading ... </h1>} > 
                       <Route path="/"  exact>
                           <HomePage />
                       </Route>

                       
                       <Route path="/about" component={AboutPage}></Route>
                       <Route path="/work" component={Work} ></Route>
                       </Suspense>
                   </Switch>


          </div>
      </Router>
  );
}

export default App;
