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
  skills: string[];
}
