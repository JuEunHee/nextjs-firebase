import _ from 'lodash';
import clsx, { ClassValue } from 'clsx';
import { ChangeEventHandler, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type Option = {
  value: string | number;
  label?: string;
  disabled?: boolean;
};

export type SelectProps = {
  id?: string;
  className?: ClassValue;
  options: Option[];
  tabIndex?: number;
  autoComplete?: string;
  placeholder?: string;
  invalid?: 'true' | 'false';
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  registration?: UseFormRegisterReturn;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, options, registration, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={clsx(className)}
        aria-invalid={invalid}
        {...registration}
        {...props}
      >
        {_.map(options, ({ value, label, disabled }, index) => {
          return (
            <option key={index} value={value} disabled={disabled}>
              {label || value}
            </option>
          );
        })}
      </select>
    );
  },
);

export default Select;
