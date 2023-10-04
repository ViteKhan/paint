import Circle from '../models/Circle';
import Eraser from '../models/Eraser';
import Line from '../models/Line';
import Pencil from '../models/Pencil';
import Rectangle from '../models/Rectangle';
import { ReactComponent as PencilIcon } from '../assets/icons/pencil.svg';
import { ReactComponent as LineIcon } from '../assets/icons/line.svg';
import { ReactComponent as RectangleIcon } from '../assets/icons/rectangle.svg';
import { ReactComponent as CircleIcon } from '../assets/icons/circle.svg';
import { ReactComponent as EraserIcon } from '../assets/icons/eraser.svg';

export const CANVAS_WIDTH = 700;
export const CANVAS_HEIGHT = 500;

export const TITLES = {
  PENCIL: 'Pencil',
  LINE: 'Line',
  RECTANGLE: 'Rectangle',
  CIRCLE: 'Circle',
  ERASER: 'Eraser',
  FILL_COLOR: 'Fill color',
  STROKE_COLOR: 'Stroke color',
};

export const TOOLS = [
  { Class: Pencil, title: TITLES.PENCIL, icon: <PencilIcon/> },
  { Class: Line, title: TITLES.LINE, icon: <LineIcon/> },
  { Class: Rectangle, title: TITLES.RECTANGLE, icon: <RectangleIcon/> },
  { Class: Circle, title: TITLES.CIRCLE, icon: <CircleIcon/> },
  { Class: Eraser, title: TITLES.ERASER, icon: <EraserIcon/> },
];