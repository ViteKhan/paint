import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';
import { TCanvas } from '../types';
import Tool from './Tool';

export default class Line extends Tool {
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
    const canvasEvent = e.target as HTMLCanvasElement;
    this.startX = e.pageX - canvasEvent.offsetLeft;
    this.startY = e.pageY - canvasEvent.offsetTop;
    this.ctx?.beginPath();
    this.ctx?.moveTo(this.startX, this.startY)
    this.saved = this.canvas?.toDataURL();
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (this.mouseDown) {
      const canvasEvent = e.target as HTMLCanvasElement;
      const currentX =  e.pageX - canvasEvent.offsetLeft;
      const currentY = e.pageY - canvasEvent.offsetTop;
      this.draw(currentX, currentY);
    }
  };

  mouseUpHandler = () => {
    this.mouseDown = false;
  };

  draw = (x: number, y: number) => {
    const image = new Image();

    if (this.saved) {
      image.src = this.saved;
      image.onload = () => {
        const canvasWidth = this.canvas?.width || CANVAS_WIDTH;
        const canvasHeight = this.canvas?.height || CANVAS_HEIGHT;
        this.ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
        this.ctx?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
        this.ctx?.beginPath();
        this.ctx?.moveTo(this.startX, this.startY)
        this.ctx?.lineTo(x, y)
        this.ctx?.stroke()
      };
    }
  };
}