import {
  Clock,
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Shield,
  Smartphone,
  Zap,
} from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
  TypographyP,
} from '@/components/ui/typography';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <TypographyH1 className="mb-6">Get In Touch</TypographyH1>
          <TypographyLead className="max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a question, want to discuss a potential
            collaboration, or just want to say hello, I&apos;d love to hear from
            you.
          </TypographyLead>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <TypographyP className="font-semibold">Email</TypographyP>
                      <TypographyMuted>arasfeld@gmail.com</TypographyMuted>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <TypographyP className="font-semibold">Phone</TypographyP>
                      <TypographyMuted>(513) 746-0289</TypographyMuted>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/arasfeld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Github className="w-6 h-6 text-primary" />
                    </a>
                    <div>
                      <TypographyP className="font-semibold">
                        GitHub
                      </TypographyP>
                      <TypographyMuted>@arasfeld</TypographyMuted>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/adam-rasfeld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-primary" />
                    </a>
                    <div>
                      <TypographyP className="font-semibold">
                        LinkedIn
                      </TypographyP>
                      <TypographyMuted>adam-rasfeld</TypographyMuted>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP>
                  I offer comprehensive software development services including:
                </TypographyP>
                <ul className="mt-4 space-y-2">
                  {[
                    'Full-stack web development',
                    'Mobile app development',
                    'System architecture design',
                    'API development and integration',
                    'Performance optimization',
                    'Technical consulting',
                  ].map((service, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="text-primary mr-2 mt-1">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
