import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyMuted,
} from '@/components/ui/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  const skills = {
    frontend: [
      'React',
      'React Native',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
    ],
    backend: [
      'Node.js',
      '.NET Core',
      'Ruby on Rails',
      'Rust',
      'gRPC',
      'Kafka',
      'GraphQL',
    ],
    databases: ['PostgreSQL', 'MongoDB', 'MSSQL Server', 'Redis'],
    other: [
      'Microservices',
      'Event-Driven Architecture',
      'Chrome Extensions',
      'Software Optimization',
      'Docker',
      'AWS',
    ],
  };

  const values = [
    {
      title: 'Problem Solving',
      description:
        'I approach every challenge with a systematic mindset, breaking down complex problems into manageable solutions.',
    },
    {
      title: 'Collaboration',
      description:
        'I believe the best results come from working closely with teams, stakeholders, and clients to understand their needs.',
    },
    {
      title: 'Continuous Learning',
      description:
        'Technology evolves rapidly, and I stay current with the latest trends and best practices in software development.',
    },
    {
      title: 'Quality Focus',
      description:
        'I prioritize writing clean, maintainable code and building systems that are scalable and reliable.',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <TypographyH1 className="mb-6">About Me</TypographyH1>
          <TypographyLead className="max-w-3xl mx-auto">
            I&apos;m a passionate Full Stack Software Developer with over 8
            years of experience building scalable applications and optimizing
            system performance. I specialize in modern web technologies and have
            worked across the entire tech stack.
          </TypographyLead>
        </div>

        {/* Background Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <TypographyH2 className="mb-6">My Journey</TypographyH2>
            <TypographyP className="mb-6">
              My journey in software development began at Miami University where
              I earned my Bachelor of Science in Computer Science. Since then,
              I&apos;ve had the privilege of working with some incredible
              companies and teams.
            </TypographyP>
            <TypographyP className="mb-6">
              I started my career at RoviSys, where I developed enterprise
              applications and learned the fundamentals of software development.
              From there, I moved to Kroger Digital, where I worked on
              large-scale consumer-facing applications.
            </TypographyP>
            <TypographyP className="mb-6">
              At Divisions Maintenance Group, I expanded my skills into mobile
              development and gained experience with React Native. I then joined
              Upstart as a Software Engineer IV, where I led initiatives to
              break apart monolithic codebases into microservices and
              implemented Kafka-based event systems for better scalability.
            </TypographyP>
            <TypographyP className="mb-6">
              Currently, I&apos;m at Seamless.AI, where I&apos;m working on
              innovative sales engagement platforms and Chrome extensions.
            </TypographyP>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <TypographyH4 className="mb-4">Education</TypographyH4>
                <TypographyMuted>
                  <strong>Bachelor of Science in Computer Science</strong>
                  <br />
                  Miami University, Oxford OH
                  <br />
                  Graduated: 2016
                </TypographyMuted>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TypographyH4 className="mb-4">Current Role</TypographyH4>
                <TypographyMuted>
                  <strong>Software Engineer II</strong>
                  <br />
                  Seamless.AI, Columbus OH
                  <br />
                  February 2023 - Present
                </TypographyMuted>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TypographyH4 className="mb-4">Location</TypographyH4>
                <TypographyMuted>
                  Cincinnati, Ohio
                  <br />
                  Available for remote work and relocation
                </TypographyMuted>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <TypographyH2 className="mb-6">Technical Skills</TypographyH2>
            <TypographyLead className="max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </TypographyLead>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg capitalize">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <TypographyH2 className="mb-6">What I Value</TypographyH2>
            <TypographyLead className="max-w-3xl mx-auto">
              The principles that guide my approach to software development
            </TypographyLead>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <TypographyP>{value.description}</TypographyP>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Beyond the Code Section */}
        <div className="text-center">
          <Card className="p-12">
            <TypographyH2 className="mb-6">Beyond the Code</TypographyH2>
            <TypographyLead className="mb-8 max-w-3xl mx-auto">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge with the developer community. I believe in continuous
              learning and staying current with industry trends.
            </TypographyLead>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
