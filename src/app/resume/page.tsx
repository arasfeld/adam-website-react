import {
  TypographyA,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from '@/components/ui/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default async function Resume() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* Left Column - Contact & Skills */}
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <TypographyH1 className="mb-4">Adam Rasfeld</TypographyH1>
              <TypographyH2 className="mb-6 text-primary">
                Full Stack Software Developer
              </TypographyH2>
              <TypographyMuted className="mb-8 leading-relaxed">
                Results-driven developer with extensive experience in building
                scalable applications and optimizing system performance.
                Passionate about problem-solving, collaboration, and
                continuously improving software quality.
              </TypographyMuted>

              <div className="mb-8">
                <TypographyH3 className="mb-4">Contact</TypographyH3>
                <div className="space-y-2">
                  <TypographyMuted>Columbus, OH</TypographyMuted>
                  <TypographyMuted>(513) 555-0123</TypographyMuted>
                  <TypographyMuted>arasfeld@gmail.com</TypographyMuted>
                  <TypographyA
                    href="https://github.com/arasfeld"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    github.com/arasfeld
                  </TypographyA>
                </div>
              </div>

              <div className="mb-8">
                <TypographyH3 className="mb-4">Technical Skills</TypographyH3>
                <div className="space-y-4">
                  <div>
                    <TypographySmall className="font-semibold mb-2 block">
                      Front-End:
                    </TypographySmall>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'React',
                        'React Native',
                        'Angular',
                        'TypeScript',
                        'JavaScript',
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <TypographySmall className="font-semibold mb-2 block">
                      Back-End:
                    </TypographySmall>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Node.js',
                        '.NET Core',
                        'Ruby on Rails',
                        'Rust',
                        'gRPC',
                        'Kafka',
                        'GraphQL',
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <TypographySmall className="font-semibold mb-2 block">
                      Databases:
                    </TypographySmall>
                    <div className="flex flex-wrap gap-2">
                      {['PostgreSQL', 'MongoDB', 'MSSQL Server', 'Redis'].map(
                        (skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <TypographySmall className="font-semibold mb-2 block">
                      Other:
                    </TypographySmall>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Microservices',
                        'Event-Driven Architecture',
                        'Chrome Extensions',
                        'Software Optimization',
                        'Docker',
                        'AWS',
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <TypographyH3 className="mb-4">Education</TypographyH3>
                <div>
                  <TypographySmall className="font-semibold block">
                    Bachelor of Science in Computer Science
                  </TypographySmall>
                  <TypographyMuted>Miami University, Oxford OH</TypographyMuted>
                  <TypographyMuted>Graduated: 2016</TypographyMuted>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="lg:w-[58%] lg:py-24">
            <TypographyH2 className="mb-8">
              Professional Experience
            </TypographyH2>

            <div className="space-y-6">
              {/* Seamless.AI */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        Software Engineer II
                      </CardTitle>
                      <TypographyMuted>
                        Seamless.AI, Columbus OH
                      </TypographyMuted>
                    </div>
                    <TypographyMuted className="text-sm">
                      Feb 2023 - Present
                    </TypographyMuted>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Migrated Chrome extension from Manifest V2 to Manifest V3,
                      ensuring compliance with Google&apos;s latest policies
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Contributed to the development of a new sales engagement
                      platform, enhancing customer experience
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Refactored and optimized legacy data tables, improving
                      performance and maintainability
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'Node.js',
                      'React',
                      'PostgreSQL',
                      'Chrome Extension',
                      'Redis',
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upstart */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        Software Engineer
                      </CardTitle>
                      <TypographyMuted>Upstart, Columbus OH</TypographyMuted>
                    </div>
                    <TypographyMuted className="text-sm">
                      Mar 2021 - Jan 2023
                    </TypographyMuted>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Developed and maintained microservices for loan processing
                      and risk assessment
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Implemented event-driven architecture using Kafka for
                      real-time data processing
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Optimized database queries and API performance, reducing
                      response times by 40%
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'Node.js',
                      'TypeScript',
                      'PostgreSQL',
                      'Kafka',
                      'Docker',
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Divisions Maintenance Group */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        Full Stack Developer
                      </CardTitle>
                      <TypographyMuted>
                        Divisions Maintenance Group, Cincinnati OH
                      </TypographyMuted>
                    </div>
                    <TypographyMuted className="text-sm">
                      Jan 2019 - Feb 2021
                    </TypographyMuted>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Built React Native mobile applications for field service
                      management
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Developed RESTful APIs and GraphQL endpoints for data
                      management
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Implemented real-time notifications and location tracking
                      features
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'React Native',
                      'Node.js',
                      'GraphQL',
                      'MongoDB',
                      'AWS',
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Kroger Digital */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        Software Developer
                      </CardTitle>
                      <TypographyMuted>
                        Kroger Digital, Cincinnati OH
                      </TypographyMuted>
                    </div>
                    <TypographyMuted className="text-sm">
                      Jun 2017 - Dec 2018
                    </TypographyMuted>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Developed customer-facing web applications for grocery
                      shopping and delivery
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Worked on Angular-based frontend applications and .NET
                      backend services
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Collaborated with UX/UI teams to implement responsive
                      design patterns
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'Angular',
                      '.NET Core',
                      'TypeScript',
                      'MSSQL',
                      'Azure',
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* RoviSys */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        Junior Developer
                      </CardTitle>
                      <TypographyMuted>RoviSys, Aurora OH</TypographyMuted>
                    </div>
                    <TypographyMuted className="text-sm">
                      May 2016 - May 2017
                    </TypographyMuted>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Developed industrial automation software using C# and .NET
                      Framework
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Created HMI (Human Machine Interface) applications for
                      manufacturing systems
                    </li>
                    <li className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      Implemented data collection and reporting systems for
                      industrial processes
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'C#',
                      '.NET Framework',
                      'SQL Server',
                      'WPF',
                      'OPC UA',
                    ].map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
