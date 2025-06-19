export interface User {
  _id: string;
  customId: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: "user" | "admin";
  status: "active" | "inactive" | "banned";
  createdAt: string;
  updatedAt: string;
}
