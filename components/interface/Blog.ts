import { MarkDownItem } from "./Markdown";

export interface Blog extends MarkDownItem {
  author: string;
  coveImage: string;
  authorImage: string;
}
