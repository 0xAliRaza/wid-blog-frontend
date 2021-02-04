export abstract class Model {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  constructor(data?: any) {
    if (data) {
      data.created_at ? (data.created_at = new Date(data.created_at)) : null;
      data.updated_at ? (data.updated_at = new Date(data.updated_at)) : null;
      data.published_at ? (data.published_at = new Date(data.published_at)) : null;
      Object.assign(this, data);
    }
  }

  get exists(): boolean {
    return !!this.id;
  }
}
