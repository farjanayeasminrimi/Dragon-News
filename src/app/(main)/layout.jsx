import Header from "@/components/Header";
import MarqueePage from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <MarqueePage></MarqueePage>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
