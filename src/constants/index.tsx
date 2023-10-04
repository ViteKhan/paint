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

export const TOOLS = [
  { Class: Pencil, title: 'Pencil', icon: <PencilIcon/> },
  { Class: Line, title: 'Line', icon: <LineIcon/> },
  { Class: Rectangle, title: 'Rectangle', icon: <RectangleIcon/> },
  { Class: Circle, title: 'Circle', icon: <CircleIcon/> },
  { Class: Eraser, title: 'Eraser', icon: <EraserIcon/> },
];
