import './Toolbar.scss';
import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react';
import { TOOLS } from '../../constants';
import { canvasStore } from '../../stores/CanvasStore';
import { toolStore } from '../../stores/ToolStore';
import { Button } from '../Button';
import { ColorPicker } from '../ColorPicker';

export const Toolbar = () => {
  const onChangeFillColor = (e: ChangeEvent<HTMLInputElement>) => {
    toolStore.setFillColor(e.target.value);
    toolStore.setStrokeColor(e.target.value);
  };

  const onChangeStrokeColor = (e: ChangeEvent<HTMLInputElement>) => {
    toolStore.setStrokeColor(e.target.value);
  };

  return (
    <div className="toolbar">
      {TOOLS.map(tool => (
        <Button
          key={tool.title}
          title={tool.title}
          onClick={() => toolStore.setTool(new tool.Class(canvasStore.canvas))}
        >
          {tool.icon}
        </Button>
      ))}
      <ColorPicker id="fill-color" label="Fill color" onChange={onChangeFillColor}/>
      <ColorPicker id="stroke-color" label="Stroke color" onChange={onChangeStrokeColor}/>
    </div>
  );
};

observer(Toolbar);