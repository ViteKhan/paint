import './ColorPicker.scss';
import { FC, HTMLProps, ReactElement, useRef } from 'react';
import { Button } from '../Button';

interface ColorPickerProps extends HTMLProps<HTMLInputElement> {
  icon: ReactElement;
}

export const ColorPicker: FC<ColorPickerProps> = ({ id, icon, title, ...inputProps }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="container">
      <Button onClick={handleButtonClick} title={title}>
        {icon}
      </Button>
      <div className="colorPicker">
        <input
          type="color"
          ref={inputRef}
          {...inputProps}
        />
      </div>
    </div>
  );
};