import React from "react";
import LeftSideBar from "@/components/HomePage/LeftSideBar";
import RightSideBar from "@/components/HomePage/RightSideBar";
import { getCategories, getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import NewsPage from "@/components/HomePage/NewsPage";

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
      <div className=" col-span-6">
        <h2 className="text-xl font-bold mb-4">Dragon News Home</h2>
        {newsById.length > 0 ? (
          newsById.map((n) => <NewsPage key={n._id} n={n}></NewsPage>)
        ) : (
          <h2 className="text-center font-semibold text-gray-500">No News Available </h2>
        )}
      </div>
      <div className=" col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default CategoryByIdPage;
