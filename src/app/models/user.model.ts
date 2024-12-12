export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  role: 'Admin' | 'Author' | 'Reader';
  profileImage?: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
}
