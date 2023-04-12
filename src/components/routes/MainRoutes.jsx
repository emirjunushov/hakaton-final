import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginList from "../Auth/LoginList/LoginList";
import RegisterList from "../Auth/RegisterList/RegisterList";
import RegisterSucces from "../Auth/Activate/Activate";
import HomePage from "../Pages/HomePage/HomePage";
import ForgotPassword from "../Auth/ForgotPasword/ForgotPasword";

const MainRoutes = () => {
  const ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/login", element: <LoginList />, id: 2 },
    { link: "/register", element: <RegisterList />, id: 3 },
    { link: "/activate", element: <RegisterSucces />, id: 4 },
    { link: "/forgotPassword", element: <ForgotPassword />, id: 4 },
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
