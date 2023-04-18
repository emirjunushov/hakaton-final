import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import AddProductProvider from "./context/AddProductProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import AddCommentsProvider from "./context/AddCommentsProvider";
import FavoriteContextProvider from "./context/FavoritesContextProvider";

const App = () => {
  return (
    <FavoriteContextProvider>
      <AddCommentsProvider>
        <AuthContextProvider>
          <AddProductProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </AddProductProvider>
        </AuthContextProvider>
      </AddCommentsProvider>
    </FavoriteContextProvider>
  );
};

export default App;
