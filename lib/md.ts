import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MarkDownItem } from "../components/interface/Markdown";

const getDir = (path: string): string => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => fs.readdirSync(dir);

const getItemInPath = (filepath: string): MarkDownItem => {
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);

  return { ...data, content } as MarkDownItem;
};

const getAllItems = (
  fileNames: string[],
  get: (name: string) => MarkDownItem
) => {
  return fileNames.map((name: string) => get(name));
};

export { getDir, getFileNames, getItemInPath, getAllItems };
