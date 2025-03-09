import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
