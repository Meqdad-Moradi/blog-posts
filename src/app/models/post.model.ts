export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  authorId: number;
  publishDate: string;
  image: string;
  tags: string[];
  comments: Comment[];
}

export interface Comment {
  id: number;
  authorName: string;
  text: string;
  timestamp: string;
}
