import './Canvas.scss';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants';

export const Canvas = () => {
  return (
    <div className="canvasContainer">
      <canvas width={CANVAS_WIDTH} height={CANVAS_HEIGHT}/>
    </div>
  );
};