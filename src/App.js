import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      {/* <Navbar /> */}
      <MainRoutes />
    </AuthContextProvider>
  );
};

export default App;
