export interface Project {
  id: string;
  name: string;
  client: string;
  year: string;
  category: string;
  subCategory?: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  coverImage: string;
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  accentColor?: string;
  link?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  timeline: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  jobTitle: string;
  company: string;
  avatar: string;
  highlight: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  location: string;
}
