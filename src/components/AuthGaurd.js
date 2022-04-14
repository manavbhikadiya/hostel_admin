import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Login from "./Login";

const AuthGaurd = ({children}) => {
  const pathName = useLocation();
  console.log(pathName);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  if (isLogin) {
    return <>{children}</>
  } else {
    return <Login/>
  }
};

export default AuthGaurd;
