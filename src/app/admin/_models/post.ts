import { Type } from "@app/home/_models";
import { Model } from "./model";
import { Tag } from "./tag";
import { User } from "./user";

export class Post extends Model {
  constructor(data?: any) {
    super(data);
  }

  published_at?: Date;
  author_id: number;
  user_id: number;
  title: string;
  html?: string;
  featured_image?: string;
  slug: string;
  tags?: Tag[];
  first_tag?: Tag;
  custom_excerpt?: string;
  meta_title?: string;
  meta_description?: string;
  featured: boolean;
  // user: User;
  published: boolean;
  type: Type;

  isPage() {
    return this.type && this.type === Type.Page;
  }
}
