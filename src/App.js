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
import { collegeId } from "./actions/action";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import UpdateHostel from "./components/UpdateHostel";

const App = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();

  useEffect(() => {
    const college_id = cookies.get("collegeId");
    const admin_id = cookies.get("adminId");
    console.log(college_id, "", admin_id);
    dispatch(collegeId(college_id));
  }, []);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addCollege">
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
        <Route path="/updateHostel">
          <UpdateHostel/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
