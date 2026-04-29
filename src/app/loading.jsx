import React from "react";

const Loader = () => {
  return (
    <div className="w-[200px] mx-auto flex gap-2 items-center">
      <h2>Loading... </h2>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default Loader;
