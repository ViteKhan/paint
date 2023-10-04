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
import { ReactComponent as UndoIcon } from '../assets/icons/undo.svg';
import { ReactComponent as RedoIcon } from '../assets/icons/redo.svg';
import { ReactComponent as SaveIcon } from '../assets/icons/save.svg';
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg';
import { canvasStore } from '../stores/CanvasStore';

export const CANVAS_WIDTH = 700;
export const CANVAS_HEIGHT = 500;

export const TOOLS = [
  { Class: Pencil, title: 'Pencil', icon: <PencilIcon/> },
  { Class: Line, title: 'Line', icon: <LineIcon/> },
  { Class: Rectangle, title: 'Rectangle', icon: <RectangleIcon/> },
  { Class: Circle, title: 'Circle', icon: <CircleIcon/> },
  { Class: Eraser, title: 'Eraser', icon: <EraserIcon/> },
];

export const MENU_ACTIONS = [
  { onClick: () => canvasStore.undo(), title: 'Undo', icon: <UndoIcon/> },
  { onClick: () => canvasStore.redo(), title: 'Redo', icon: <RedoIcon/> },
  { onClick: () => alert('Saved'), title: 'Save', icon: <SaveIcon/> },
  { onClick: () => canvasStore.clear(), title: 'Clear', icon: <TrashIcon/> },
];