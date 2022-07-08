import React, { Component } from "react";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import NavagationComponent from "./Navagation/nav-contatiner";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Blog from "./pages/Blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match.js";


export default class App extends Component {
  
  
  
  render() {
    
    return (
      <div className="container">
        <Router>
          <div>
            
            <NavagationComponent />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}