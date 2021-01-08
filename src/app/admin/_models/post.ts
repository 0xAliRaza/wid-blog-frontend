import { Tag } from './tag';
import { User } from "./user";

export interface Post {
  id: number;
  user_id: number;
  title: string;
  html: string;
  featured_image: string;
  slug: string;
  tags: Tag[];
  custom_excerpt: string;
  meta_title: string;
  meta_description: string;
  featured: boolean;
  status: "draft" | "published";
}
