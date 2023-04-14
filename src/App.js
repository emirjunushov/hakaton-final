import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import AddProductProvider from "./context/AddProductProvider";
import ProductCard from "./components/products/ProductCard";
import ProductList from "./components/products/ProductList";

const App = () => {
  return (
    <AuthContextProvider>
      <AddProductProvider>
        <Navbar />
        <MainRoutes />
        {/* <Footer /> */}
        <ProductCard />
      </AddProductProvider>
    </AuthContextProvider>
  );
};

export default App;
