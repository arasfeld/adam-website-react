export type DeviceType = 'desktop' | 'tablet' | 'mobile';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  year: string;
  githubUrl: string;
  liveUrl: string | null;
  image: string;
  deviceType: DeviceType;
}
