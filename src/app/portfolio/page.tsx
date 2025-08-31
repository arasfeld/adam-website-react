import { ExternalLink, Github } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DeviceFrame } from '@/components/ui/device-frame';
import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
} from '@/components/ui/typography';

export default function Portfolio() {
  const projects = [
    {
      title: 'Electron Spotify App',
      description:
        'A comprehensive desktop music client built with Electron that provides a native Spotify experience with personalized analytics, playlist management, and music discovery features.',
      technologies: [
        'Electron',
        'React 18',
        'TypeScript',
        'Redux Toolkit',
        'RTK Query',
        'Mantine v7',
        'Spotify Web API',
        'Vite',
        'Vitest',
      ],
      highlights: [
        'OAuth 2.0 authentication with automatic token refresh',
        'Personalized music analytics with time-based filtering',
        'Comprehensive playlist and library management',
        'Real-time currently playing track display',
        'Music discovery and search functionality',
        'Desktop-first responsive design with system integration',
      ],
      year: '2024',
      githubUrl: 'https://github.com/arasfeld/electron-spotify-app',
      liveUrl: null,
      image: '/spotify-app-main.png',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive portfolio website built with Next.js and TypeScript, featuring dark mode, smooth animations, and optimized performance.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Vercel',
      ],
      highlights: [
        'Modern responsive design with dark/light mode',
        'Optimized performance and SEO',
        'Spotify integration for music showcase',
        'Professional portfolio presentation',
      ],
      year: '2024',
      githubUrl: 'https://github.com/arasfeld/adam-website-react',
      liveUrl: 'https://adamrasfeld.com',
      image: '/portfolio-preview.png',
    },
    {
      title: 'Task Management System',
      description:
        'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
      highlights: [
        'Real-time collaborative task management',
        'User authentication and authorization',
        'Responsive design for all devices',
        'Data persistence and backup',
      ],
      year: '2023',
      githubUrl: 'https://github.com/arasfeld/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      image: '/task-manager-preview.png',
    },
    {
      title: 'Freebox - Free Item Marketplace',
      description:
        'A marketplace application for giving away free items, built with fairness features to ensure equitable distribution and prevent hoarding.',
      technologies: [
        'Next.js 14',
        'TypeScript',
        'NextAuth.js',
        'Prisma',
        'PostgreSQL',
        'Cloudinary',
        'shadcn/ui',
        'Tailwind CSS',
      ],
      highlights: [
        'Google OAuth authentication with NextAuth.js',
        'Drag-and-drop image uploads with Cloudinary optimization',
        'Fairness system to prevent item hoarding',
        'Interest management with recipient selection UI',
        'Dark mode support with theme toggle',
        'Responsive design for all screen sizes',
      ],
      year: '2024',
      githubUrl: 'https://github.com/arasfeld/freebox',
      liveUrl: null,
      image: '/freebox-preview.png',
    },
    {
      title: 'Recipe Finder',
      description:
        'A recipe discovery application that helps users find and save recipes based on available ingredients and dietary preferences.',
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Spoonacular API',
        'JWT Authentication',
      ],
      highlights: [
        'Ingredient-based recipe search',
        'Dietary preference filtering',
        'Recipe saving and favorites',
        'Nutritional information display',
      ],
      year: '2023',
      githubUrl: 'https://github.com/arasfeld/recipe-finder',
      liveUrl: 'https://recipe-finder-demo.vercel.app',
      image: '/recipe-finder-preview.png',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <TypographyH1 className="mb-6">Personal Projects</TypographyH1>
          <TypographyLead className="max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack
            development, modern technologies, and creative problem-solving.
          </TypographyLead>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow"
            >
              {project.image && (
                <div className="p-4">
                  <DeviceFrame
                    imageSrc={project.image}
                    imageAlt={`${project.title} screenshot`}
                    deviceType="desktop"
                    size="lg"
                  />
                </div>
              )}
              <CardHeader className="pb-6">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <TypographyH2 className="text-lg font-semibold mb-3">
                    Technologies
                  </TypographyH2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <TypographyH2 className="text-lg font-semibold mb-3">
                    Key Features
                  </TypographyH2>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button asChild size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-12">
            <TypographyH2 className="mb-6">Ready to Collaborate?</TypographyH2>
            <TypographyLead className="mb-8 max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how I can help bring your ideas to
              life.
            </TypographyLead>
            <Button asChild variant="outline" size="lg">
              <a href="/contact">Get in Touch</a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
