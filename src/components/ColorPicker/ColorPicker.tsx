import './ColorPicker.scss';
import { FC, HTMLProps } from 'react';

interface ColorPickerProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

export const ColorPicker: FC<ColorPickerProps> = ({ id, label, ...inputProps }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="InputColor"
        id={id}
        type="color"
        {...inputProps}
      />
    </>
  );
};