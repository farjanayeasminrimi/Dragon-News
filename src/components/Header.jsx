import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format, compareAsc } from "date-fns";

const Header = () => {
  return (
    <div className="py-6 space-y-2 text-center">
      <Image src={logo} width={400} height={100} alt="logo" className="mx-auto"></Image>
      <p className="font-medium text-[1rem] text-gray-500">Journalism Without Fear or Favour</p>
      <span className="font-medium text-[1rem] text-gray-500">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </span>
    </div>
  );
};

export default Header;
