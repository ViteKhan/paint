import { TCanvas } from '../types';
import Tool from './Tool';

export default class Pencil extends Tool {
  constructor(canvas: TCanvas) {
    super(canvas);
    this.listen();
  };

  listen() {
    if (this.canvas) {
      this.canvas.onmousedown = this.mouseDownHandler;
      this.canvas.onmousemove = this.mouseMoveHandler;
      this.canvas.onmouseup = this.mouseUpHandler;
    }
  };

  mouseDownHandler = (e: MouseEvent) => {
    this.mouseDown = true;
    this.ctx?.beginPath();
    const canvasEvent = e.target as HTMLCanvasElement;
    this.ctx?.moveTo(e.pageX - canvasEvent.offsetLeft, e.pageY - canvasEvent.offsetTop);
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (this.mouseDown) {
      const canvasEvent = e.target as HTMLCanvasElement;
      this.draw(e.pageX - canvasEvent.offsetLeft, e.pageY - canvasEvent.offsetTop);
    }
  };

  mouseUpHandler = () => {
    this.mouseDown = false;
  };

  draw = (x: number, y: number) => {
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  };
}