import './ColorPicker.scss';
import { FC, HTMLProps, ReactElement, useRef } from 'react';
import { Button } from '../Button';

interface ColorPickerProps extends HTMLProps<HTMLInputElement> {
  icon: ReactElement;
  active?: boolean;
  onSetActive: (value: string) => void;
  title: string;
}

export const ColorPicker: FC<ColorPickerProps> = ({ id, icon, onSetActive, active, title, ...inputProps }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      onSetActive(title);
      inputRef.current.click();
    }
  };

  return (
    <div className="container">
      <Button onClick={handleButtonClick} title={title} active={active}>
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