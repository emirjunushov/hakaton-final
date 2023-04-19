import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import AddProductProvider from "./context/AddProductProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import AddCommentsProvider from "./context/AddCommentsProvider";
import CartContextProdiver from "./context/CartContextProvider";

const App = () => {
  return (
    <AddCommentsProvider>
      <AuthContextProvider>
        <AddProductProvider>
          <CartContextProdiver>
            <Navbar />
            <MainRoutes />
            <Footer />
          </CartContextProdiver>
        </AddProductProvider>
      </AuthContextProvider>
    </AddCommentsProvider>
  );
};

export default App;
