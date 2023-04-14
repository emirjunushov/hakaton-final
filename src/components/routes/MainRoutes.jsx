import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginList from "../Auth/LoginList/LoginList";

import RegisterSucces from "../Auth/Activate/Activate";
import HomePage from "../Pages/HomePage/HomePage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ForgotPassword from "../Auth/ForgotPasword/ForgotPassword";
import AddProduct from "../products/Addproduct";
import ProductList from "../products/ProductList";
import EditProduct from "../products/EditProduct";
import RegisterList from "../Auth/RegisterList/RegisterList";

const MainRoutes = () => {
  const ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/login", element: <LoginList />, id: 2 },
    { link: "/register", element: <RegisterList />, id: 3 },
    { link: "/activate", element: <RegisterSucces />, id: 4 },
    { link: "/about", element: <AboutUs />, id: 5 },
    { link: "/forgotPassword", element: <ForgotPassword />, id: 6 },
    { link: "/add/product", element: <AddProduct />, id: 7 },
    { link: "/*", element: <h1>not found</h1>, id: 8 },
    { link: "/products", element: <ProductList />, id: 9 },
    { link: "/edit/:id", element: <EditProduct />, id: 10 },
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
