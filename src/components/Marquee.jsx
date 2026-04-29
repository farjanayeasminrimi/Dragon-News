import React from "react";
import Marquee from "react-fast-marquee";

const MarqueePage = () => {
  const news = [
    {
      id: 1,
      title: "Global energy prices may surge 24% in 2026 amid Middle East conflict.",
    },
    {
      id: 2,
      title: "AstraZeneca announces £300M UK investment despite global tensions.",
    },
    {
      id: 3,
      title: "Oil prices rise above $109 as Iran conflict impacts markets.",
    },
    {
      id: 4,
      title: "Ronnie O’Sullivan exits World Snooker Championship in shock defeat.",
    },
  ];
  return (
    <div className="container mx-auto bg-gray-200 p-2 rounded-lg flex gap-4 items-center">
      <button className="btn bg-indigo-500 text-white">Latest</button>
      <Marquee>
        {news.map((n) => (
          <span className="mr-2" key={n.id}>
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueePage;
