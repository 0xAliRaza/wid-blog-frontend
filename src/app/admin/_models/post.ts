import { Tag } from "./tag";
import { User } from "./user";

export class Post {
  id: number;
  user_id: number;
  title: string;
  html?: string;
  featured_image?: string;
  slug: string;
  tags: Tag[];
  custom_excerpt?: string;
  meta_title?: string;
  meta_description?: string;
  featured?: boolean;
  _published: boolean;
  get published(): boolean {
    return !!this._published;
  }

  set published(val: boolean) {
    this._published = val;
  }

  get exists(): boolean {
    return !!this.id;
  }

}
