interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <label htmlFor={label} className="font-medium text-sm">
        {label}:
      </label>
      <input
        id={label}
        type="color"
        className="h-8 w-8 border-none outline-none cursor-pointer appearance-none"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default ColorPicker;
