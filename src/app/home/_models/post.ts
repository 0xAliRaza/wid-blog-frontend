import { Author, Tag } from "./index";
import { Type } from "./type";

export interface Post {
  title: string;
  html?: string;
  slug: string;
  featured: boolean;
  featured_image: string;
  custom_excerpt?: string;
  published_at: Date;
  author: Author;
  tags?: Tag[];
  type?: Type;
  first_tag?: Tag;
}
