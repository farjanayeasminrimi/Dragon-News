"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  const googleHandler = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const githubHandler = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login With</h2>

      <div className="flex flex-col gap-2">
        <button onClick={googleHandler} className="border-blue-500 text-blue-500 btn">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={githubHandler} className="border-black rounded-md btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
