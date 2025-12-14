import React from 'react';
import { cn } from '@/lib/utils';

export const Label = React.forwardRef(({ className, htmlFor, ...props }, ref) => (
  <label
    ref={ref}
    htmlFor={htmlFor}
    className={cn('text-sm font-medium text-gray-800', className)}
    {...props}
  />
));

Label.displayName = 'Label';
