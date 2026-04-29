import React from "react";
import Marquee from "react-fast-marquee";

const MarqueePage = () => {
  return (
    <div className="container mx-auto bg-gray-200 p-4 rounded-lg flex gap-4 items-center">
      <button className="btn bg-red-600 text-white">Latest</button>
      <Marquee>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam autem cupiditate neque eos
        minus corporis qui voluptatibus aliquid ut dolorum deserunt in omnis, obcaecati doloremque
        repudiandae provident facilis. Est, a?
      </Marquee>
    </div>
  );
};

export default MarqueePage;
