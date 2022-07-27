import Label from '@/components/common/Label/Label';
import Textarea from '@/components/common/Textarea/Textarea';

const TextareaForm = ({
  id,
  title,
  name,
  value,
  onChange,
  placeholder,
  cols,
  rows,
  rightLabel,
  leftLabel,
}: any) => {
  return (
    <div className="form-control">
      <Label htmlFor={id} className="label">
        <span className="label-text">{title}</span>
      </Label>
      <Textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="textarea textarea-bordered h-18"
        placeholder={placeholder}
        cols={cols}
        rows={rows}
      />
      {(leftLabel || rightLabel) && (
        <Label htmlFor={id} className="label">
          <span className="label-text-alt text-gray-400">{leftLabel}</span>
          <span className="label-text-alt text-gray-400">{rightLabel}</span>
        </Label>
      )}
    </div>
  );
};

export default TextareaForm;
