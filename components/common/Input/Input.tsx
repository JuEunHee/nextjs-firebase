import clsx, { ClassValue } from 'clsx';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  FormEventHandler,
  forwardRef,
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
  id?: string;
  type: string;
  className?: ClassValue;
  tabIndex?: number;
  placeholder?: string;
  invalid?: 'true' | 'false';
  readOnly?: boolean;
  checked?: boolean;
  multiple?: boolean;
  accept?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onInput?: FormEventHandler<HTMLInputElement>;
  registration?: UseFormRegisterReturn;
  name?: string;
  value?: string;
  disabled?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, registration, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(className)}
        aria-invalid={invalid}
        {...registration}
        {...props}
      />
    );
  },
);

export default Input;
