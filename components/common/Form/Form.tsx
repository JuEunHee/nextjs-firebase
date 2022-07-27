import _ from 'lodash';
import clsx, { ClassValue } from 'clsx';
import { useEffect } from 'react';
import {
  useForm,
  FieldValues,
  SubmitHandler,
  UseFormProps,
  UseFormReset,
  UseFormReturn,
  Path,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, ZodIssue } from 'zod';

type HandleSubmitParameters<TFieldValues extends FieldValues> = Parameters<
  SubmitHandler<TFieldValues>
>;

type HandleSubmit<TFieldValues extends FieldValues> = (args: {
  data: HandleSubmitParameters<TFieldValues>[0];
  reset: UseFormReset<TFieldValues>;
  event: HandleSubmitParameters<TFieldValues>[1];
}) => any | Promise<any>;

export type FormProps<TFormValues, Schema> = {
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  onSubmit: HandleSubmit<TFormValues>;
  className?: ClassValue;
  options?: UseFormProps<TFormValues>;
  schema?: Schema;
  errors?: ZodIssue[];
};

const Form = <
  TFormValues extends Record<string, any> = Record<string, any>,
  Schema extends ZodType = ZodType,
>({
  children,
  onSubmit,
  className,
  options,
  schema,
  errors,
  ...props
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  useEffect(() => {
    if (errors && errors[0]) {
      _.forEach(errors, ({ path, message }: any) => {
        methods.setError(path[0] as Path<TFormValues>, { message });
      });

      methods.setFocus(errors[0].path[0] as Path<TFormValues>);
      toast.error(errors[0].message);
    }
  }, [errors, methods]);

  return (
    <form
      className={clsx(className)}
      onSubmit={methods.handleSubmit((data, event) => {
        methods.clearErrors();
        onSubmit({ reset: methods.reset, data, event });
      })}
      {...props}
    >
      {children(methods)}
    </form>
  );
};

export default Form;
