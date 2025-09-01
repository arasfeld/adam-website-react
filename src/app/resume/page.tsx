'use client';

import {
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Code,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
  TypographyLead,
} from '@/components/ui/typography';

export default function Resume() {
  const experience = [
    {
      company: 'Seamless.AI',
      role: 'Software Engineer II',
      duration: 'Feb 2023 - Present',
      location: 'Columbus, OH',
      description:
        'Building innovative sales engagement platforms and Chrome extensions. Working with modern web technologies and optimizing user experiences.',
      technologies: ['React', 'TypeScript', 'Chrome Extensions', 'Node.js'],
      achievements: [
        'Developed Chrome extensions for sales automation',
        'Optimized platform performance and user experience',
        'Collaborated with cross-functional teams on product features',
      ],
    },
    {
      company: 'Upstart',
      role: 'Software Engineer IV',
      duration: 'Sep 2021 - Jan 2023',
      location: 'San Mateo, CA',
      description:
        'Led initiatives to break apart a monolithic codebase into modular microservices, increasing scalability and system reliability.',
      technologies: ['Ruby on Rails', 'gRPC', 'Kafka', 'React', 'PostgreSQL'],
      achievements: [
        'Led initiatives to break apart a monolithic codebase into modular microservices, increasing scalability',
        'Improved the performance of paginated reporting queries, significantly reducing load times',
        'Designed and implemented a Kafka-based event bus for service decoupling, enabling better system reliability',
      ],
    },
    {
      company: 'Divisions Maintenance Group',
      role: 'Software Development Engineer III',
      duration: 'Nov 2020 - Sep 2021',
      location: 'Newport, KY',
      description:
        'Built new technician onboarding experience and led migration of service bus messaging system to gRPC.',
      technologies: [
        'C#.NET',
        'gRPC',
        'Node.js',
        'React',
        'React Native',
        'MSSQL Server',
      ],
      achievements: [
        'Built a new technician onboarding experience for both web and mobile applications, streamlining user registration',
        'Led the migration of a service bus messaging system to gRPC, improving inter-service communication',
        'Developed a native module to facilitate gRPC requests on Android and iOS devices',
      ],
    },
    {
      company: 'Kroger Digital',
      role: 'Software Engineer',
      duration: '2019 - 2021',
      location: 'Cincinnati, OH',
      description:
        'Developed large-scale consumer-facing applications for one of the largest grocery retailers.',
      technologies: ['React', 'Angular', 'Java', 'MongoDB'],
      achievements: [
        'Built customer-facing web applications',
        'Worked on high-traffic e-commerce platforms',
        'Implemented responsive design and accessibility features',
      ],
    },
    {
      company: 'RoviSys',
      role: 'Software Engineer',
      duration: '2016 - 2019',
      location: 'Aurora, OH',
      description:
        'Developed enterprise applications and learned fundamental software development practices.',
      technologies: ['.NET', 'C#', 'SQL Server', 'JavaScript'],
      achievements: [
        'Built enterprise automation systems',
        'Developed industrial control applications',
        'Gained experience with enterprise software development',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Miami University',
      location: 'Oxford, OH',
      duration: '2012 - 2016',
      gpa: '3.8/4.0',
      highlights: [
        "Dean's List: 2013-2016",
        'Computer Science Honor Society',
        'Senior Capstone Project: Machine Learning Algorithm Implementation',
      ],
    },
  ];

  const skills = [
    {
      category: 'Frontend Development',
      technologies: [
        'React',
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Next.js',
      ],
      icon: '⚡',
    },
    {
      category: 'Backend Development',
      technologies: [
        'Node.js',
        '.NET',
        'C#',
        'Java',
        'Python',
        'Ruby',
        'Express.js',
        'ASP.NET',
      ],
      icon: '🔧',
    },
    {
      category: 'Mobile Development',
      technologies: [
        'React Native',
        'iOS Development',
        'Android Development',
        'Mobile UI/UX',
        'Cross-platform Development',
      ],
      icon: '📱',
    },
    {
      category: 'Database & Cloud',
      technologies: [
        'PostgreSQL',
        'MongoDB',
        'SQL Server',
        'Redis',
        'AWS',
        'Azure',
        'Docker',
        'Kubernetes',
      ],
      icon: '🗄️',
    },
  ];

  const projects = [
    {
      name: 'Spotify Integration App',
      description:
        'A web application that integrates with Spotify API to display user listening history and create personalized playlists.',
      technologies: ['React', 'TypeScript', 'Spotify API', 'Node.js'],
      features: [
        'Real-time music tracking',
        'Personalized recommendations',
        'Playlist generation',
        'User analytics dashboard',
      ],
    },
    {
      name: 'FreeBox Mobile App',
      description:
        'A cross-platform mobile application for managing and tracking personal finances with intuitive budgeting tools.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      features: [
        'Expense tracking',
        'Budget planning',
        'Financial insights',
        'Multi-currency support',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="space-y-6 mb-8">
            <TypographyH1 className="text-5xl md:text-6xl font-bold">
              Adam Rasfeld
            </TypographyH1>
            <TypographyH3 className="text-2xl md:text-3xl text-primary font-semibold">
              Full Stack Developer
            </TypographyH3>
            <TypographyLead className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative digital solutions and
              transforming complex problems into elegant, scalable systems.
            </TypographyLead>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>arasfeld@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Cincinnati, Ohio</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(513) 746-0289</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <a href="/adam-rasfeld-resume.pdf" download>
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/arasfeld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://www.linkedin.com/in/adam-rasfeld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Experience Section */}
          <section className="space-y-8">
            <div className="text-center mb-8">
              <TypographyH1 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                Professional Experience
              </TypographyH1>
            </div>
            {experience.map((job, index) => (
              <div key={index}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {job.role}
                        </CardTitle>
                        <TypographyH3 className="text-lg text-primary/80">
                          {job.company}
                        </TypographyH3>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {job.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <TypographyP className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </TypographyP>
                    <div>
                      <TypographyH3 className="text-lg font-semibold mb-3">
                        Technologies Used
                      </TypographyH3>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <TypographyH3 className="text-lg font-semibold mb-3">
                        Key Achievements
                      </TypographyH3>
                      <ul className="space-y-2">
                        {job.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start text-muted-foreground"
                            >
                              <span className="text-primary mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="space-y-8">
            <div className="text-center mb-8">
              <TypographyH1 className="text-3xl font-bold flex items-center justify-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                Education
              </TypographyH1>
            </div>
            {education.map((edu, index) => (
              <div key={index}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                          {edu.degree}
                        </CardTitle>
                        <TypographyH3 className="text-lg text-primary/80">
                          {edu.school}
                        </TypographyH3>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <TypographyP className="font-semibold">
                        GPA: {edu.gpa}
                      </TypographyP>
                    </div>
                    <div>
                      <TypographyH3 className="text-lg font-semibold mb-3">
                        Highlights
                      </TypographyH3>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start text-muted-foreground"
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </section>

          {/* Skills Section */}
          <section className="space-y-8">
            <div className="text-center mb-8">
              <TypographyH1 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                Technical Skills
              </TypographyH1>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{skill.icon}</div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {skill.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8">
            <div className="text-center mb-8">
              <TypographyH1 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                Featured Projects
              </TypographyH1>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">
                          {index === 0 ? '🎵' : index === 1 ? '📱' : '🏢'}
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <TypographyP className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </TypographyP>
                      <div>
                        <TypographyH3 className="text-lg font-semibold mb-3">
                          Technologies
                        </TypographyH3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <TypographyH3 className="text-lg font-semibold mb-3">
                          Key Features
                        </TypographyH3>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-muted-foreground"
                            >
                              <span className="text-primary mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
