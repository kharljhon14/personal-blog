import fs from "fs";
import { join } from "path";

const getDir = (path: string): string => join(process.cwd(), path);

const BLOG_DIR = getDir("/content/blogs");

const getFileNames = (dir: string): string[] => fs.readdirSync(dir);

const getBlogFileNames = (): string[] => {
  return getFileNames(BLOG_DIR);
};

const getItemInPath = (filepath: string): string => {
  return fs.readFileSync(filepath, "utf-8");
};

const getBlog = (fileName: string) => {
  return getItemInPath(join(BLOG_DIR, fileName));
};

export { getBlogFileNames, getBlog };
