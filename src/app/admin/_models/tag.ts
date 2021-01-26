import { Model } from "./model";

export class Tag extends Model {
  constructor(data?: any) {
    super(data);
  }
  name: string;
  slug: string;
  description: string;
}
