import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
const Blogs = () => {
  useTitleChange("Blogs");
  const blogsData = useLoaderData();
  return (
    <div className="my-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogsData.map((blog) => (
          <div className="relative bg-slate-200 shadow rounded-md mt-24 lg:mt-36">
            <div className=" flex justify-center">
              <img
                src={blog.blog_image}
                className="w-40 h-40 lg:w-60 lg:h-60 object-cover rounded-full absolute -top-20 lg:-top-32 "
                alt=""
              />
            </div>
            <div className="mt-20 lg:mt-24 p-5 lg:p-10">
              <h1 className="text-2xl my-5 font-medium text-slate-800">
                {blog.blog_title}
              </h1>
              <p className="text-md">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
