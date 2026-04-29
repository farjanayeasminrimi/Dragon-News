import Link from "next/link";
import React from "react";
import user from "@/assets/user.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="my-5 flex justify-between items-center container mx-auto">
      <div></div>
      <ul className="flex justify-between items-center gap-6">
        <Link className="font-semibold text-gray-500" href={"/"}>
          Home
        </Link>
        <Link className="font-semibold text-gray-500" href={"/about-us"}>
          About
        </Link>
        <Link className="font-semibold text-gray-500" href={"/career"}>
          Career
        </Link>
      </ul>

      <div className="flex gap-3 items-center">
        <Image src={user} width={35} height={35} alt="user icon"></Image>
        <Link href={"/login"}>
          <button className="btn bg-black text-white">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
