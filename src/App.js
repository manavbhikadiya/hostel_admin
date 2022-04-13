import "./App.css";
import Navbar from "./components/Navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import AddHostel from "./components/AddHostel";
import Login from "./components/Login";
import Register from "./components/Register";
import College from "./components/AddCollege";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login,adminData } from "./actions/action";
import { useEffect } from "react";
import UpdateHostel from "./components/UpdateHostel";
import axios from "axios";

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialData()
  }, []);

  const getInitialData = () =>{
    axios.get('/hostel/initalData')
    .then((res)=>{
      dispatch(login(res.data.college_id))
      dispatch(adminData(res.data))
    })
    .catch((e)=>{
      console.log(e);
    })
  }

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/addCollege">
          <Navbar />
          <College />
        </Route>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/addHostel">
          <Navbar />
          <AddHostel />
        </Route>
        <Route path="/updateHostel">
          <Navbar />
          <UpdateHostel/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
