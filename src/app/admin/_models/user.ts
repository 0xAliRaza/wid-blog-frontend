import { Role } from "./role";

export class User {
  constructor(data?: any) {
    if (data) {
      data.created_at ? (data.created_at = new Date(data.created_at)) : null;
      data.updated_at ? (data.updated_at = new Date(data.updated_at)) : null;
      Object.assign(this, data);
    }
  }

  id: number;
  name: string;
  email: string;
  role: Role;
  token?: string;
  created_at?: Date;
  updated_at?: Date;

  isSuperAdmin(): boolean {
    return this.role === Role.SuperAdmin;
  }

  isAdmin(): boolean {
    return this.role === Role.Admin;
  }

  isWriter(): boolean {
    return this.role === Role.Writer;
  }
}
