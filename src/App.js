import './App.css';
import Navbar from './components/Navbar';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AddHostel from './components/AddHostel';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addHostel">
          <AddHostel/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
