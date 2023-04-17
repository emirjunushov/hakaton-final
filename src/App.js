import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./components/routes/MainRoutes";
import AuthContextProvider from "./context/AuthContextProvider";
import Footer from "./components/Footer/Footer";
import AddProductProvider from "./context/AddProductProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import AddCommentsProvider from "./context/AddCommentsProvider";

// ===============transition
import { useLocation } from "react-router-dom";
import { Switch } from "@mui/material";
// import { Animated, useTransition } from "@react-spring/animated";
// ===============transition

const App = () => {
  // const location = useLocation();
  // const transitions = useTransition(location, (location) => location.pathname, {
  //   from: {
  //     opacity: 0,
  //     transform: "translateX(100%)",
  //   },
  //   enter: {
  //     opacity: 1,
  //     transform: "translateX(0%)",
  //   },
  //   leave: {
  //     opacity: 0,
  //     transform: "translateX(-100%)",
  //   },
  // });
  return (
    <AddCommentsProvider>
      <AuthContextProvider>
        <AddProductProvider>
          {/* {transitions.map(({ item, props, key }) => ( */}
          {/* <Animated.div key={key} style={props}> */}
          {/* <Switch location={item}> */}
          <Navbar />
          <MainRoutes />
          <Footer />
          {/* </Switch> */}
          {/* </Animated.div> */}
          {/* ))} */}
        </AddProductProvider>
      </AuthContextProvider>
    </AddCommentsProvider>
  );
};

export default App;
