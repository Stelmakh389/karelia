import React from 'react';
import { cn } from '@/lib/utils';

export const Textarea = React.forwardRef(({ className, rows = 3, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(
      'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-sm transition focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 disabled:opacity-60',
      className
    )}
    {...props}
  />
));

Textarea.displayName = 'Textarea';
