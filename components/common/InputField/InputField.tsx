import { ClassValue } from 'clsx';
import { Ref, useId } from 'react';
import type { Except, Merge, Simplify } from 'type-fest';
import Field, { FieldProps } from '@/components/common/Field/Field';
import Input, { InputProps } from '@/components/common/Input/Input';

export type InputFieldProps = Simplify<
  Except<
    Merge<FieldProps, InputProps>,
    'id' | 'inside' | 'grouped' | 'children' | 'name' | 'value' | 'disabled'
  > & {
    ref?: Ref<HTMLInputElement>;
    fieldClass?: ClassValue;
  }
>;

const InputField = ({
  type,
  className,
  label,
  labelClass,
  fieldClass,
  before,
  after,
  isEmptyBefore,
  isEmptyAfter,
  ...props
}: InputFieldProps) => {
  const checkboxed = type === 'checkbox';
  const grouped = !!(before || after);
  const inputClass = checkboxed
    ? ['checkbox']
    : ['input input-bordered', grouped ? 'w-full' : 'grow'];
  const inputId = useId();

  return (
    <Field
      id={inputId}
      label={label}
      className={fieldClass}
      labelClass={labelClass}
      inside={checkboxed}
      grouped={grouped}
      before={before}
      after={after}
      isEmptyBefore={isEmptyBefore}
      isEmptyAfter={isEmptyAfter}
    >
      <Input
        id={inputId}
        type={type}
        className={[inputClass, className]}
        {...props}
      />
    </Field>
  );
};

export default InputField;
