import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginList from "../Auth/LoginList/LoginList";
import RegisterList from "../Auth/RegisterList/RegisterList";
import RegisterSucces from "../Auth/RegisterSuccess/RegisterSucces";
import HomePage from "../Pages/HomePage/HomePage";

const MainRoutes = () => {
  const ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/login", element: <LoginList />, id: 2 },
    { link: "/register", element: <RegisterList />, id: 3 },
    { link: "/register-success", element: <RegisterSucces />, id: 3 },
  ];
  return (
    <>
      <Routes>
        {ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
