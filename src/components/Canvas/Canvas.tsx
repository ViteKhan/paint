import './Canvas.scss';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants';
import Pencil from '../../models/Pencil';
import canvasStore from '../../stores/CanvasStore';
import toolStore from '../../stores/ToolStore';
import { TCanvas } from '../../types';

export const Canvas = () => {
  const canvasRef = useRef<TCanvas>(null);

  useEffect(() => {
    canvasStore.setCanvas(canvasRef.current);
    toolStore.setTool(new Pencil(canvasRef.current));
  }, []);

  const onMouseDown = () => {
    if (canvasRef.current) {
      canvasStore.pushToUndoList(canvasRef.current.toDataURL());
    }
  };

  return (
    <div className="canvasContainer">
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      />
    </div>
  );
};

observer(Canvas);