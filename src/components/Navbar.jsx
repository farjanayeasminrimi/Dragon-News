import Link from "next/link";
import React from "react";
import user from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="my-5 flex justify-between items-center container mx-auto">
      <div></div>
      <ul className="flex justify-between items-center gap-6">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/about-us"}>About</NavLink>
        <NavLink href={"/career"}>Career</NavLink>
      </ul>

      <div className="flex gap-3 items-center">
        <Image src={user} width={35} height={35} alt="user icon"></Image>
        <Link href={"/login"}>
          <button className="btn bg-indigo-500 text-white">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
