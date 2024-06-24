import React, { useContext } from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Routes, Route } from "react-router-dom";
import { Context } from "..";
// import { SHOP_ROUTE } from "../utils/consts";


const AppRouter = () => {
  const {user} = useContext(Context)

  return (
  <Routes>
    {user && authRoutes.map(({path, Component}) => 
      <Route key={path} path={path} Component={Component} exact/>
    )}
    {publicRoutes.map(({path, Component}) => 
    <Route key={path} path={path} Component={Component} exact/>
    )}
  </Routes>

  );
  
};

export default AppRouter;
