import { Model } from "./model";

export class Setting extends Model {
  constructor(data?: any) {
    super(data);
  }

  title: string;
  meta_title: string;
  meta_description?: string;
  logo?: string;
}
