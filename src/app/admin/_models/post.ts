import { Tag } from "./tag";
import { User } from "./user";

export class Post {
  constructor(data?: any) {
    if (data) {
      this.setProps(data);
    }
  }

  id: number;
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

  private _published: boolean;
  get published(): boolean {
    return !!this._published;
  }

  set published(val: boolean) {
    this._published = val;
  }

  get exists(): boolean {
    return !!this.id;
  }

  setProps(data: object) {
    Object.assign(this, data);
  }
}
