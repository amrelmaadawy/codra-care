import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ 
  title, 
  description, 
  centered = true, 
  className, 
  ...props 
}: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        'mb-16 flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-start',
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-foreground/70">
          {description}
        </p>
      )}
    </div>
  );
}
