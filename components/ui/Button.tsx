import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 active:scale-95';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-soft',
    secondary: 'bg-accent text-white hover:bg-accent-hover shadow-soft',
    outline: 'border-2 border-neutral-dark bg-transparent text-foreground hover:bg-neutral',
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], 'px-6 py-3', className)}
      {...props}
    >
      {children}
    </button>
  );
}
