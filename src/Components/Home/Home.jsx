import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 opacity-95 z-10">
        <Navber></Navber>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
