import React from 'react';
import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-[#1e3a5f] text-white hover:bg-[#2c5282]',
  outline: 'border border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white bg-transparent'
};

const sizes = {
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl'
};

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'md', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c9a962] disabled:opacity-60 disabled:cursor-not-allowed',
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    />
  )
);

Button.displayName = 'Button';
