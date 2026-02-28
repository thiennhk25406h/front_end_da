export type ViewState = 'home' | 'documents_list' | 'subject' | 'document' | 'community' | 'post_detail' | 'login' | 'register' | 'forgot_password' | 'upload_document' | 'profile';

export interface Document {
  id: string;
  title: string;
  type: 'PDF' | 'DOCX' | 'XLSX' | 'PPTX' | 'Slide';
  views: number;
  downloads: number;
  rating: number;
  ratingCount?: number;
  author: string;
  thumbnail?: string;
  date: string;
  pageCount?: number;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  time: string;
  rating: number;
  content: string;
  likes: number;
  comments: number;
  tags?: string[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  faculty: string;
  credits: number;
  docCount: number;
  rating: number;
}