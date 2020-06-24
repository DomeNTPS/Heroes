import React from "react";
import ReactDOM from "react-dom";
import Home from './components/Home'
import Herodetail from './components/Herodetail'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    /* Hello */

    return (
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
              <Herodetail />
            </Route>
          </Switch>
          {/* <Home /> */}
          {/* <Herodetail /> */}
        </div>
      </Router>
    );
}

export default App;
