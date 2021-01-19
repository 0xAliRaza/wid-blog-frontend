import { Role } from "./role";

export class User {
  id: number;
  name: string;
  email: string;
  role: Role;
  token: string;

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
