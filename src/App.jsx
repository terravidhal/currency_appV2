import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home/Home";
import BoxConverter from "./components/BoxConverter/BoxConverter";
import Convert from "./components/Convert/Convert";
import Send from "./components/Send/Send";
import Graphics from "./components/Graphics/Graphics";
import Alerts from "./components/Alerts/Alerts";







const App = () => {
  return (
        <Routes>
        <Route path="/" element={<Navigate replace to="/home"  />} />  
        <Route path="/home" element={<Home />} />
      </Routes>
  );
};

export default App;
