import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
