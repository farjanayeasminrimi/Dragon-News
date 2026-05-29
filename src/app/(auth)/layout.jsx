import Navbar from "@/components/Navbar";
import React from "react";
import { ToastContainer } from "react-toastify";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
      <ToastContainer />
    </div>
  );
};

export default AuthLayout;
