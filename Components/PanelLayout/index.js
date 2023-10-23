// "use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const PanelLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PanelLayout;
