import './App.css';
import Navbar from './components/Navbar';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddHostel from './components/AddHostel';
import Login from './components/Login';
import Register from './components/Register';

import { useState } from 'react';
import College from './components/AddCollege';

const App = () => {

  const [islogin, SetIsLogin] = useState(true);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/college">
          <College />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addHostel">
          <AddHostel />
        </Route>
      </Switch>
    </>
  );
}

export default App;
