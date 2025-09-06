import type { Metadata } from 'next';
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

import type { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Portfolio - Adam Rasfeld Projects',
  description:
    "Explore Adam Rasfeld's portfolio of full-stack development projects including Dionysus drink tracking app, Freebox marketplace app, Electron Spotify client, and modern web applications built with React, Next.js, and TypeScript.",
  keywords: [
    'Adam Rasfeld Portfolio',
    'Full Stack Projects',
    'React Projects',
    'Next.js Projects',
    'TypeScript Projects',
    'React Native Apps',
    'Mobile Development',
    'Electron Apps',
    'Spotify Integration',
    'Marketplace App',
    'Web Development Portfolio',
    'Software Development Projects',
    'Open Source Projects',
  ],
  openGraph: {
    title: 'Portfolio - Adam Rasfeld Projects',
    description:
      "Explore Adam Rasfeld's portfolio of full-stack development projects including Dionysus drink tracking app, Freebox marketplace app, Electron Spotify client, and modern web applications.",
    url: 'https://adamrasfeld.com/portfolio',
  },
  twitter: {
    title: 'Portfolio - Adam Rasfeld Projects',
    description:
      "Explore Adam Rasfeld's portfolio of full-stack development projects including Dionysus drink tracking app, Freebox marketplace app, Electron Spotify client, and modern web applications.",
  },
};

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: 'Dionysus',
      description:
        'A sophisticated React Native cocktail and drink tracking app that combines cocktail discovery, drink logging, and intelligent intoxication tracking with real-time BAC calculations and a beautiful, modern interface.',
      technologies: [
        'React Native 0.79.5',
        'Expo SDK 53',
        'TypeScript',
        'React Native Reanimated',
        'React Hook Form',
        'Zod',
        'AsyncStorage',
        'SF Symbols',
      ],
      highlights: [
        'Real-time BAC calculation using the Widmark formula',
        'Intelligent search with 1000+ pre-loaded drinks across 15+ categories',
        'Animated circular progress meter with color-coded intoxication levels',
        'Curated cocktail recipe collection with step-by-step instructions',
        'Custom component library built with pure React Native StyleSheet',
        'Cross-platform compatibility (iOS, Android, Web) with single codebase',
        'Smooth 60fps animations using React Native Reanimated',
        'Advanced form validation with React Hook Form and Zod schemas',
      ],
      year: '2025',
      githubUrl: 'https://github.com/arasfeld/dionysus',
      liveUrl: null,
      image: '/dionysus-app-main.png',
      deviceType: 'mobile',
    },
    {
      title: 'Freebox',
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
      year: '2025',
      githubUrl: 'https://github.com/arasfeld/freebox',
      liveUrl: null,
      image: '/freebox-app-main.png',
      deviceType: 'desktop',
    },
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
      deviceType: 'desktop',
    },
    {
      title: 'Personal Website',
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
      deviceType: 'desktop',
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
                    deviceType={project.deviceType}
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
