import { TCanvas } from '../types';

export default class Tool {
  protected canvas: TCanvas;
  protected ctx: CanvasRenderingContext2D | null;
  protected mouseDown: boolean = false;

  constructor(canvas: TCanvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext('2d') : null;
    this.destroyEvents();
  };

  set fillColor(color: string) {
    this.ctx!.fillStyle = color;
  };

  set strokeColor(color: string) {
    this.ctx!.strokeStyle = color;
  };

  set lineWidth(width: number) {
    this.ctx!.lineWidth = width;
  };

  destroyEvents = () => {
    if (this.canvas) {
      this.canvas.onmousedown = null;
      this.canvas.onmousemove = null;
      this.canvas.onmouseup = null;
    }
  };
}