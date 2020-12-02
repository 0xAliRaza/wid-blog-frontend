import { User } from "./user";

export class Post {
  id: number;
  user_id: number;
  title: string;
  html: string;
  featured_image_file: File;
  featured_image: string;
  slug: string;
  tags: any;
  custom_excerpt: string;
  meta_title: string;
  meta_description: string;
  featured: string;
  status: string;
}
