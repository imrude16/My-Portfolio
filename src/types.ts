export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  videoUrl: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skeleton?: React.ReactNode; // FIX: Used in Experience.tsx
}

// FIX: Missing type for Certifications component
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}