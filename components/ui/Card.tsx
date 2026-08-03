import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-2xl bg-white p-6 shadow-card border border-neutral-dark/30 transition-all hover:shadow-soft',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
