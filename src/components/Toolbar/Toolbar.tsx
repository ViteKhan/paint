import './Toolbar.scss';
import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react';
import { TOOLS } from '../../constants';
import { canvasStore } from '../../stores/CanvasStore';
import { toolStore } from '../../stores/ToolStore';
import { Button } from '../Button';
import { ColorPicker } from '../ColorPicker';
import { ReactComponent as PaletteIcon } from '../../assets/icons/palette.svg';
import { ReactComponent as FillIcon } from '../../assets/icons/fill.svg';

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
      <ColorPicker
        title="Fill color"
        onChange={onChangeFillColor}
        icon={<FillIcon/>}
      />
      <ColorPicker
        title="Stroke color"
        onChange={onChangeStrokeColor}
        icon={<PaletteIcon/>}
      />
    </div>
  );
};

observer(Toolbar);