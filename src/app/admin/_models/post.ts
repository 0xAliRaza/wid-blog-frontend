import { Model } from "./model";
import { Tag } from "./tag";
import { User } from "./user";

export class Post extends Model {
  constructor(data?: any) {
    super(data);
  }

  published_at?: Date;
  author: number;
  user_id?: number;
  title: string;
  html?: string;
  featured_image?: string;
  slug: string;
  tags?: Tag[];
  custom_excerpt?: string;
  meta_title?: string;
  meta_description?: string;
  featured: boolean;
  user: User;
  first_tag?: Tag;
  published: boolean;
  page?: boolean;
}
