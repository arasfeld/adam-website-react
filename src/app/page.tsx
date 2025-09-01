import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-12">
        <div className="relative max-w-4xl mx-auto w-full">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <TypographyH1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Adam Rasfeld
              </TypographyH1>
            </div>

            <div className="space-y-6">
              <TypographyH2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Full Stack Developer
              </TypographyH2>
            </div>

            <div>
              <TypographyP className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building digital solutions with precision. Transforming complex
                algorithms into elegant, scalable systems.
              </TypographyP>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <div>
                <Button asChild size="lg">
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
              <div>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
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
              <div>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
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
                <div key={index}>
                  <Card className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{skill.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.tech}
                      </p>
                    </CardContent>
                  </Card>
                </div>
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
              <div key={index}>
                <Card className="group hover:shadow-lg transition-shadow">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TypographyH2 className="text-4xl md:text-5xl font-bold mb-6">
              Available for New Projects
            </TypographyH2>
            <TypographyP className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I&apos;m currently accepting freelance and contract opportunities.
              Let&apos;s build something amazing together.
            </TypographyP>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Quick Fixes & Small Projects',
                price: '$75-125',
                period: '/hour',
                description:
                  'Perfect for bug fixes, small features, or quick consultations',
                features: [
                  'Bug fixes and debugging',
                  'Small feature additions',
                  'Code reviews',
                  'Technical consulting',
                  'Performance optimization',
                ],
                popular: false,
              },
              {
                title: 'Full-Stack Development',
                price: '$100-150',
                period: '/hour',
                description:
                  'Complete web applications and mobile apps from concept to deployment',
                features: [
                  'Full-stack web development',
                  'Mobile app development',
                  'API design & development',
                  'Database design',
                  'Deployment & DevOps',
                  'Ongoing maintenance',
                ],
                popular: true,
              },
              {
                title: 'Enterprise Solutions',
                price: 'Custom',
                period: 'pricing',
                description:
                  'Large-scale applications and system architecture for enterprise clients',
                features: [
                  'System architecture design',
                  'Microservices development',
                  'Scalable infrastructure',
                  'Team collaboration',
                  'Long-term partnerships',
                  'Dedicated support',
                ],
                popular: false,
              },
            ].map((pkg, index) => (
              <div key={index}>
                <Card
                  className={`relative h-full ${
                    pkg.popular ? 'border-2 border-primary shadow-lg' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-muted-foreground">
                        {pkg.period}
                      </span>
                    </div>
                    <TypographyP className="text-muted-foreground mt-2">
                      {pkg.description}
                    </TypographyP>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button
                        asChild
                        className="w-full"
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Card className="p-8 max-w-2xl mx-auto">
              <TypographyH2 className="text-2xl font-bold mb-4">
                Why Choose Me?
              </TypographyH2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">⚡</span>
                    <span className="text-sm">Fast turnaround times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🎯</span>
                    <span className="text-sm">Clear communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🔒</span>
                    <span className="text-sm">Secure & reliable code</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">📱</span>
                    <span className="text-sm">Responsive design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🚀</span>
                    <span className="text-sm">Performance optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">💬</span>
                    <span className="text-sm">Ongoing support</span>
                  </div>
                </div>
              </div>
            </Card>
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
          <div>
            <Card className="p-12">
              <div>
                <TypographyH2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </TypographyH2>
              </div>
              <div>
                <TypographyP className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let&apos;s turn your vision into reality. I&apos;m here to
                  help you build the next big thing.
                </TypographyP>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div>
                  <Button asChild size="lg">
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </div>
                <div>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/portfolio">View Portfolio</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
