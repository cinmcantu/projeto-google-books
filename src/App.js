import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Busca from './pages/Busca';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/busca/' component={Busca} />
          <Route path='/busca/:searchParams/:pageNum' component={Busca} />
        </Switch>
      </Router>

    </>
  )
}

export default App;
