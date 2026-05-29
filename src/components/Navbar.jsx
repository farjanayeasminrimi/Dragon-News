"use client";
import Link from "next/link";
import React from "react";
import user from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  console.log(session?.user);
  return (
    <div className="my-5 flex justify-between items-center container mx-auto">
      <div></div>
      <ul className="flex justify-between items-center gap-6">
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/about-us"}>About</NavLink>
        <NavLink href={"/career"}>Career</NavLink>
      </ul>

      {session ? (
        <div className="flex gap-3 items-center">
          <h2 className="uppercase font-semibold">{session?.user?.name}</h2>
          <Image
            className="rounded-full"
            src={session?.user?.image || user}
            width={35}
            height={35}
            alt="user icon"
          ></Image>
          <button
            onClick={async () => await authClient.signOut()}
            className="btn bg-indigo-500 text-white"
          >
            Log Out
          </button>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="btn bg-indigo-500 text-white">Log In</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
