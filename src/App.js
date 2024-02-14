import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/homePage/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App