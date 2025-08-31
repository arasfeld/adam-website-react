import * as React from 'react';

import { cn } from '@/lib/utils';

export function TypographyA({
  className,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      className={cn(
        'font-medium underline-offset-2 hover:underline',
        className
      )}
      {...props}
    />
  );
}

export function TypographyBlockquote({
  className,
  ...props
}: React.ComponentProps<'blockquote'>) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  );
}

export function TypographyH1({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
        className
      )}
      {...props}
    />
  );
}

export function TypographyH2({
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  );
}

export function TypographyH3({
  className,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  );
}

export function TypographyH4({
  className,
  ...props
}: React.ComponentProps<'h4'>) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  );
}

export function TypographyInlineCode({
  className,
  ...props
}: React.ComponentProps<'code'>) {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className
      )}
      {...props}
    />
  );
}

export function TypographyLarge({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return <div className={cn('text-lg font-semibold', className)} {...props} />;
}

export function TypographyLead({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-muted-foreground text-xl', className)} {...props} />
  );
}

export function TypographyList({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  );
}

export function TypographyMuted({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-muted-foreground text-sm', className)} {...props} />
  );
}

export function TypographyP({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  );
}

export function TypographySmall({
  className,
  ...props
}: React.ComponentProps<'small'>) {
  return (
    <small
      className={cn('text-sm leading-none font-medium', className)}
      {...props}
    />
  );
}
