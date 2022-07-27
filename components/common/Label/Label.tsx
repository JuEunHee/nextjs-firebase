export interface ILabel {
  htmlFor: string;
  name?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

const Label = ({ name, description, children, ...props }: ILabel) => {
  return (
    <label {...props}>
      {name}
      {description && <span className="sr-only">{description}</span>}
      {children}
    </label>
  );
};

export default Label;
