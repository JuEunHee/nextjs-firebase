import { MouseEventHandler, PropsWithChildren, forwardRef } from 'react';
import clsx, { ClassValue } from 'clsx';

export type ButtonProps = PropsWithChildren<{
  submitted?: boolean;
  className?: ClassValue;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, submitted, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={submitted ? 'submit' : 'button'}
        className={clsx(className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
