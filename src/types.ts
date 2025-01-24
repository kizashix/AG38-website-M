export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  impact: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}