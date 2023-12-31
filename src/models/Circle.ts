import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';
import { TCanvas } from '../types';
import Tool from './Tool';

export default class Circle extends Tool {
  startX = 0;
  startY = 0;
  saved: string | undefined;

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
    this.startX = e.pageX - canvasEvent.offsetLeft;
    this.startY = e.pageY - canvasEvent.offsetTop;
    this.saved = this.canvas?.toDataURL();
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (this.mouseDown) {
      const canvasEvent = e.target as HTMLCanvasElement;
      let currentX =  e.pageX - canvasEvent.offsetLeft;
      let currentY = e.pageY - canvasEvent.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      let radius = Math.sqrt(width**2 + height**2)
      this.draw(this.startX, this.startY, radius);
    }
  };

  mouseUpHandler = () => {
    this.mouseDown = false;
  };

  draw = (x: number, y: number, radius: number) => {
    const image = new Image();
    if (this.saved) {
      image.src = this.saved;
      image.onload = () => {
        const canvasWidth = this.canvas?.width || CANVAS_WIDTH;
        const canvasHeight = this.canvas?.height || CANVAS_HEIGHT;
        this.ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
        this.ctx?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
        this.ctx?.beginPath();
        this.ctx?.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx?.fill();
        this.ctx?.stroke();
      };
    }
  };
}