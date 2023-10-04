import './Paint.scss';
import { Canvas } from '../Canvas';
import { Menu } from '../Menu';
import { Toolbar } from '../Toolbar';

export const Paint = () => {
  return (
    <div className="paint">
      <div className="panel">
        <Menu/>
        <Toolbar/>
      </div>
      <Canvas/>
    </div>
  );
};
