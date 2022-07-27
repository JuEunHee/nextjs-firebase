export interface ITextarea {
  id: string;
  name: string;
  value: string;
  onChange: (event: any) => void;
  cols?: number;
  rows?: number;
  placeholder?: string;
  className?: string;
}

const Textarea = ({
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
  cols = 30,
  rows = 2,
}: ITextarea) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default Textarea;
