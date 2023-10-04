import { TCanvas } from '../types';
import Pencil from './Pencil';

export default class Eraser extends Pencil {
  constructor(canvas: TCanvas) {
    super(canvas);
    this.ctx!.globalCompositeOperation = 'destination-out';
  };

  draw = (x: number, y: number) => {
    this.ctx!.strokeStyle = 'white';
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  };
}