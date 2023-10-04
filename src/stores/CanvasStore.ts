import { makeAutoObservable } from 'mobx';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants';
import { TCanvas } from '../types';

class CanvasStore {
  canvas: TCanvas = null;
  undoList: string[] = [];
  redoList: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCanvas = (canvas: TCanvas) => {
    this.canvas = canvas;
  };

  pushToUndoList = (data: string) => {
    this.undoList.push(data);
  };

  undo = () => {
    const ctx = this.canvas?.getContext('2d');
    const canvasWidth = this.canvas?.width || CANVAS_WIDTH;
    const canvasHeight = this.canvas?.height || CANVAS_HEIGHT;

    if (this.undoList.length) {
      const dataUrl = this.undoList.pop();
      this.redoList.push(this.canvas?.toDataURL()!);
      const image = new Image();

      if (dataUrl) {
        image.src = dataUrl;
        image.onload = () => {
          ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
        }
      }

    } else {
      ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
    }
  };

  redo = () => {
    const ctx = this.canvas?.getContext('2d');
    const canvasWidth = this.canvas?.width || CANVAS_WIDTH;
    const canvasHeight = this.canvas?.height || CANVAS_HEIGHT;

    if (this.redoList.length) {
      const dataUrl = this.redoList.pop();
      this.undoList.push(this.canvas?.toDataURL()!);
      const image = new Image();

      if (dataUrl) {
        image.src = dataUrl;
        image.onload = () => {
          ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx?.drawImage(image, 0, 0, canvasWidth, canvasHeight);
        }
      }
    }
  };
}

export default new CanvasStore();