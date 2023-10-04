import './Paint.scss';
import { Canvas } from '../Canvas';
import { Menu } from '../Menu';
import { Toolbar } from '../Toolbar';

export const Paint = () => {
  return (
    <div className="paint">
      <Menu/>
      <Toolbar/>
      <Canvas/>
    </div>
  );
};
