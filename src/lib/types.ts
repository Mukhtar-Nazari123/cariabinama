import type { ImagePlaceholder } from "./placeholder-images";

export type Company = {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  website: string;
};

export type Job = {
  id: string;
  title: string;
  company: Company;
  location: string;
  type: 'تمام وقت' | 'پاره وقت' | 'قراردادی' | 'کارآموزی';
  salary?: string;
  description: string;
  fullDescription: string;
  postedDate: string;
};

export type BlogPost = {
  slug: string;
  title:string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: ImagePlaceholder;
};
