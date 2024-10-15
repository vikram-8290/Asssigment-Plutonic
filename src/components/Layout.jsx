import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet /> {/* This renders the content of each route */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
