import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/HomePage/Home';
import {Navbar} from "./components";
import GlobalStyle from './globalStyle';


function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
