import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12">
        <div className="relative max-w-4xl mx-auto w-full">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <TypographyH1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
                Adam Rasfeld
              </TypographyH1>
            </div>

            <div className="space-y-6">
              <TypographyH2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full Stack Developer
              </TypographyH2>
            </div>

            <TypographyP className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building digital solutions with precision. Transforming complex
              algorithms into elegant, scalable systems.
            </TypographyP>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button asChild size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <TypographyH2 className="text-4xl md:text-5xl font-bold">
                  Building the Future,
                  <span className="block text-primary">
                    One Algorithm at a Time
                  </span>
                </TypographyH2>
                <TypographyP className="text-xl text-muted-foreground leading-relaxed">
                  With over 8 years of experience crafting digital solutions, I
                  blend technical expertise with creative problem-solving to
                  deliver exceptional user experiences.
                </TypographyP>
                <TypographyP className="text-lg text-muted-foreground leading-relaxed">
                  From startups to enterprise, I&apos;ve helped teams scale
                  their applications and optimize their systems for maximum
                  performance.
                </TypographyP>
              </div>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  name: 'Frontend',
                  tech: 'React, Angular, TypeScript',
                  icon: '⚡',
                },
                {
                  name: 'Backend',
                  tech: 'Node.js, .NET, Ruby',
                  icon: '🔧',
                },
                {
                  name: 'Mobile',
                  tech: 'React Native, iOS, Android',
                  icon: '📱',
                },
                {
                  name: 'Architecture',
                  tech: 'Microservices, Cloud, DevOps',
                  icon: '🏗️',
                },
              ].map((skill, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.tech}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TypographyH2 className="text-4xl md:text-5xl font-bold mb-6">
              Services
            </TypographyH2>
            <TypographyP className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, I handle every aspect of modern
              software development
            </TypographyP>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Frontend Development',
                description:
                  'Creating responsive, interactive interfaces that users love',
              },
              {
                icon: '⚙️',
                title: 'Backend Development',
                description:
                  'Building robust, scalable APIs and server-side solutions',
              },
              {
                icon: '📱',
                title: 'Mobile Development',
                description: 'Cross-platform mobile apps that work seamlessly',
              },
              {
                icon: '🏗️',
                title: 'System Architecture',
                description:
                  'Designing scalable, maintainable system architectures',
              },
              {
                icon: '🗄️',
                title: 'Database Design',
                description:
                  'Optimizing data storage and retrieval for performance',
              },
              {
                icon: '💡',
                title: 'Technical Consulting',
                description:
                  'Strategic guidance for technology decisions and implementation',
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-muted-foreground">
                    {service.description}
                  </TypographyP>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: '8+', label: 'Years Experience' },
              { number: '15+', label: 'Technologies' },
              { number: '7+', label: 'Enterprise Apps' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12">
            <TypographyH2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </TypographyH2>
            <TypographyP className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your vision into reality. I&apos;m here to help
              you build the next big thing.
            </TypographyP>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
