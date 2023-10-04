import { useState } from 'react';
import { TITLES } from '../../constants';

export const useActive = () => {
  const [active, setActive] = useState<string>(TITLES.PENCIL);

  const onSetActive = (value: string) => {
    setActive(value);
  };

  return { active, onSetActive };
};