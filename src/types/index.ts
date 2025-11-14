export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
