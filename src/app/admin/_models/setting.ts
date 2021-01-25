export class Setting {
  constructor(data?: any) {
    if (data) {
      data.created_at ? (data.created_at = new Date(data.created_at)) : null;
      data.updated_at ? (data.updated_at = new Date(data.updated_at)) : null;
      Object.assign(this, data);
    }
  }

  id: number;
  title: string;
  meta_title: string;
  meta_description?: string;
  logo?: string;
  created_at?: Date;
  updated_at?: Date;

  get exists(): boolean {
    return !!this.id;
  }
}
