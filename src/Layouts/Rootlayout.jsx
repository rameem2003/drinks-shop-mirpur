import React from "react";
import Navigation from "../components/shared/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Rootlayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
