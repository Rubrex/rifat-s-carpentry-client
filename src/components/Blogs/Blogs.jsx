import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";
const Blogs = () => {
  useTitleChange("Blogs");
  const blogsData = useLoaderData();
  return (
    <div className="my-5 container mx-auto mb-20">
      <ScrollToTop />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {blogsData.map((blog) => (
          <div
            key={blog._id}
            className="relative bg-woodLight/40 shadow rounded-md mt-24  mx-5"
          >
            <div className=" flex justify-center">
              <img
                src={blog.blog_image}
                className="w-20 h-20 lg:w-40 lg:h-40 object-cover rounded-full absolute -top-20 lg:-top-20 "
                alt=""
              />
            </div>
            <div className="mt-14 p-5 lg:p-7">
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
