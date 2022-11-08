import { useEffect } from "react";

const useTitleChange = (title) => {
  useEffect(() => {
    document.title = `${title}- Rifat's Carpentry`;
  }, [title]);
};

export default useTitleChange;
