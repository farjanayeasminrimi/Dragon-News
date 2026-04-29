import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login With</h2>

      <div className="flex flex-col gap-2">
        <button className="border-blue-500 text-blue-500 btn">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="border-black rounded-md btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
