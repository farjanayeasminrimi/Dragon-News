import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsPage = ({ n }) => {
  console.log(n, "news");
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Author info */}
        <div className="flex justify-between items-center bg-slate-200 p-4 rounded-md">
          <div className="flex gap-1 items-center">
            <Image
              src={n.author?.img}
              alt={n.author?.name}
              height={40}
              width={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{n.author?.name}</h2>
              <p className="text-xs">{n.author?.published_date}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>

        <h2 className="card-title">{n.title}</h2>

        <figure>
          <Image src={n.image_url} alt={n.title} width={300} height={300} className="w-full" />
        </figure>

        <p className="line-clamp-3">{n.details}</p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h2 className="flex items-center gap-2">
              <IoIosStar className="text-lg text-yellow-500" />

              {n.rating.number}
            </h2>
            <h2 className="flex items-center gap-2">
              <FaEye className="text-lg" />
              {n.total_view}
            </h2>
          </div>

          <Link href={`/news/${n._id}`}>
            <button className="btn bg-indigo-500 text-white">See details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
