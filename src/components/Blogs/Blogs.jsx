import React from "react";
import useTitleChange from "../../hooks/useTitleChange";
const Blogs = () => {
  useTitleChange("Blogs");
  return (
    <div className="my-10 container mx-auto">
      <h2>Blogs</h2>
    </div>
  );
};

export default Blogs;
