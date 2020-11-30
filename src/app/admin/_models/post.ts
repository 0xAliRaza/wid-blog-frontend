import { User } from "./user";

export class Post {
  id: number;
  user: User;
  title: string;
  html: string;
  featured_image: string;
  featured_image_url: string;
  slug: string;
  tags: any;
  custom_excerpt: string;
  meta_title: string;
  meta_description: string;
  featured: string;
}
