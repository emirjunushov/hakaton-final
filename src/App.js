import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </CartContextProvider>
  );
};

export default App;
