import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import AddProductProvider from "./context/AddProductProvider";
import AddCommentsProvider from "./context/AddCommentsProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <AuthContextProvider>
      <AddProductProvider>
        <AddCommentsProvider>
          <Navbar />
          <MainRoutes />
          {/* <Footer /> */}
        </AddCommentsProvider>
      </AddProductProvider>
    </AuthContextProvider>
  );
};

export default App;
