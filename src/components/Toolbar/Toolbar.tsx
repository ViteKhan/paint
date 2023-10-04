import './Toolbar.scss';
import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react';
import { TITLES, TOOLS } from '../../constants';
import { canvasStore } from '../../stores/CanvasStore';
import { toolStore } from '../../stores/ToolStore';
import { Button } from '../Button';
import { ColorPicker } from '../ColorPicker';
import { ReactComponent as PaletteIcon } from '../../assets/icons/palette.svg';
import { ReactComponent as FillIcon } from '../../assets/icons/fill.svg';
import { useActive } from './useActive';

export const Toolbar = () => {
  const { active, onSetActive } = useActive();

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
          active={active === tool.title}
          onClick={() => {
            onSetActive(tool.title);
            toolStore.setTool(new tool.Class(canvasStore.canvas));
          }}
        >
          {tool.icon}
        </Button>
      ))}
      <ColorPicker
        title={TITLES.FILL_COLOR}
        onSetActive={onSetActive}
        active={active === TITLES.FILL_COLOR}
        onChange={onChangeFillColor}
        icon={<FillIcon/>}
      />
      <ColorPicker
        title={TITLES.STROKE_COLOR}
        onSetActive={onSetActive}
        active={active === TITLES.STROKE_COLOR}
        onChange={onChangeStrokeColor}
        icon={<PaletteIcon/>}
      />
    </div>
  );
};

observer(Toolbar);