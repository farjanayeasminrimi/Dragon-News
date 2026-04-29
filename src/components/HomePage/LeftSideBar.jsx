import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Category</h2>
      <ul className="flex flex-col gap-1">
        {categories.map((category) => (
          <li
            key={category.category_id}
            className={`bg-gray-200 p-2 text-center font-medium rounded-md text-md ${activeId === category.category_id && "bg-indigo-200 text-indigo-600"}`}
          >
            <Link href={`/category/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
