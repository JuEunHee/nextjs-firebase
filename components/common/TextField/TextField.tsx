import clsx, { ClassValue } from 'clsx';
import { FormEventHandler, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type TextareaProps = {
  id?: string;
  className?: ClassValue;
  tabIndex?: number;
  autoComplete?: string;
  placeholder?: string;
  invalid?: 'true' | 'false';
  readOnly?: boolean;
  onInput?: FormEventHandler<HTMLTextAreaElement>;
  registration?: UseFormRegisterReturn;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, registration, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(className)}
        aria-invalid={invalid}
        {...registration}
        {...props}
      />
    );
  },
);

export default Textarea;
