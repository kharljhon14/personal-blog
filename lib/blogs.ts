import { join } from "path";
import { Blog } from "../components/interface/Blog";
import { getAllItems, getDir, getFileNames, getItemInPath } from "./md";

const BLOG_DIR = getDir("/content/blogs");

const getBlogFileNames = (): string[] => {
  return getFileNames(BLOG_DIR);
};

const getBlog = (fileName: string): Blog => {
  return getItemInPath(join(BLOG_DIR, fileName)) as Blog;
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();
  return getAllItems(names, getBlog) as Blog[];
};

export { getBlogFileNames, getBlog, getBlogs };
