import { Author, Tag } from "./index";

export interface Post {
  id: number;
  title: string;
  html?: string;
  slug: string;
  featured: boolean;
  featured_image: string;
  custom_excerpt: string;
  published_at: Date;
  author: Author;
  tags: Tag[];
  page?: boolean;
}