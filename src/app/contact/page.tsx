import {
  TypographyH1,
  TypographyP,
  TypographyLead,
  TypographyMuted,
} from '@/components/ui/typography';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    <TypographyMuted>(513) 555-0123</TypographyMuted>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <TypographyP className="font-semibold">
                      Location
                    </TypographyP>
                    <TypographyMuted>Columbus, Ohio</TypographyMuted>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://github.com/arasfeld"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    GitHub Profile
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href="https://www.linkedin.com/in/adam-rasfeld"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn Profile
                  </a>
                </Button>
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
