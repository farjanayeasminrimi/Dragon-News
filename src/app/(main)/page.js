import LeftSideBar from "@/components/HomePage/LeftSideBar";
import RightSideBar from "@/components/HomePage/RightSideBar";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data;
};
const getNewsById = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  const data = await res.json();
  return data;
};

export default function Home() {
  const categoriesRes = getCategories();
  const categoriesStatus = use(categoriesRes);
  const categories = categoriesStatus.data.news_category;

  const newsById = getNewsById("01");
  console.log(newsById);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="bg-purple-200 col-span-6">
        <h2>Dragon News Home</h2>
      </div>
      <div className=" col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
