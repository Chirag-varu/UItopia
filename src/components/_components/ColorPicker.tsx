import React, { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useOnClickOutside  from "use-onclickoutside";

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void; 
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, onChange }) => {
  const [isPickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close the picker when clicking outside
  useOnClickOutside(pickerRef, () => setPickerOpen(false));

  return (
    <div className="flex items-center gap-3">
      {/* Label */}
      <label className="font-semibold text-sm">{label}:</label>

      {/* Color Preview Button */}
      <div
        className="w-14 h-10 rounded cursor-pointer border border-black dark:border-gray-300"
        style={{ backgroundColor: color }}
        onClick={() => setPickerOpen(!isPickerOpen)}
      ></div>

      {/* Popover for the Color Picker */}
      {isPickerOpen && (
        <div
          ref={pickerRef}
          className="absolute mt-2 z-10 bg-white p-2 shadow-lg rounded"
        >
          <HexColorPicker color={color} onChange={onChange} />
          <p className="mt-1 text-center text-xs">{color}</p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;