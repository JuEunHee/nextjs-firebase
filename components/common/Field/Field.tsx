import clsx, { ClassValue } from 'clsx';
import { PropsWithChildren, forwardRef } from 'react';

export type FieldProps = PropsWithChildren<{
  id: string;
  label?: string;
  labelClass?: ClassValue;
  className?: ClassValue;
  inside?: boolean;
  grouped?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  isEmptyBefore?: boolean;
  isEmptyAfter?: boolean;
}>;

const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      children,
      id,
      label,
      labelClass,
      className,
      inside,
      grouped,
      before,
      after,
      isEmptyBefore,
      isEmptyAfter,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={clsx('form-control', className)}>
        {label && (
          <label
            htmlFor={!inside ? id : undefined}
            className={clsx('label cursor-pointer', labelClass)}
          >
            <span className="label-text">{label}</span>
            {inside && children}
          </label>
        )}
        {!inside && grouped && (
          <label className="input-group">
            {before && (isEmptyBefore ? before : <span>{before}</span>)}
            {children}
            {after && (isEmptyAfter ? after : <span>{after}</span>)}
          </label>
        )}
        {!inside && !grouped && children}
      </div>
    );
  },
);

export default Field;
