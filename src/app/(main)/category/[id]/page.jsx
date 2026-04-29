import React from "react";
import LeftSideBar from "@/components/HomePage/LeftSideBar";
import RightSideBar from "@/components/HomePage/RightSideBar";
import { getCategories, getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const CategoryByIdPage = async ({ params }) => {
  const { id } = await params;
  const categoriesStatus = await getCategories();
  const categories = categoriesStatus.data.news_category;

  const newsById = await getNewsById(id);
  console.log(newsById);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="bg-purple-200 col-span-6">
        <h2>Dragon News Home</h2>
        {newsById.map((n) => (
          <span key={n._id}>{n.title}</span>
        ))}
      </div>
      <div className=" col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default CategoryByIdPage;
