'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { TypographyP } from '@/components/ui/typography';
import { Loader2, Send } from 'lucide-react';

// Contact form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset(); // Clear the form
      } else {
        toast.error(
          result.error || 'Failed to send message. Please try again.'
        );
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">Send Me a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register('firstName')}
                className={errors.firstName ? 'border-red-500' : ''}
              />
              {errors.firstName && (
                <TypographyP className="text-sm text-red-600">
                  {errors.firstName.message}
                </TypographyP>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register('lastName')}
                className={errors.lastName ? 'border-red-500' : ''}
              />
              {errors.lastName && (
                <TypographyP className="text-sm text-red-600">
                  {errors.lastName.message}
                </TypographyP>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <TypographyP className="text-sm text-red-600">
                {errors.email.message}
              </TypographyP>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Project Inquiry"
              {...register('subject')}
              className={errors.subject ? 'border-red-500' : ''}
            />
            {errors.subject && (
              <TypographyP className="text-sm text-red-600">
                {errors.subject.message}
              </TypographyP>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or how I can help..."
              rows={6}
              className={`resize-none ${
                errors.message ? 'border-red-500' : ''
              }`}
              {...register('message')}
            />
            {errors.message && (
              <TypographyP className="text-sm text-red-600">
                {errors.message.message}
              </TypographyP>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting || !isValid || !isDirty}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
