import { User } from "./user";

export class Post {
  id: number;
  user: User;
  title: string;
  html: string;
  featuredImage: string;
  slug: string;
  tags: any;
  customExcerpt: string;
  metaTitle: string;
  metaDescription: string;
  featured: string;
}
