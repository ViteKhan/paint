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

  pushToRedoList = (data: string) => {
    this.redoList.push(data);
  };

  clear = () => {
    const ctx = this.canvas?.getContext('2d');
    const canvasWidth = this.canvas?.width || CANVAS_WIDTH;
    const canvasHeight = this.canvas?.height || CANVAS_HEIGHT;
    this.pushToUndoList(this.canvas?.toDataURL()!);
    ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
  };

  undo = () => {
    const ctx = this.canvas?.getContext('2d');
    const canvasWidth = this.canvas?.width || CANVAS_WIDTH;
    const canvasHeight = this.canvas?.height || CANVAS_HEIGHT;

    if (this.undoList.length) {
      const dataUrl = this.undoList.pop();
      this.pushToRedoList(this.canvas?.toDataURL()!);
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
      this.pushToUndoList(this.canvas?.toDataURL()!);
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

const canvasStore = new CanvasStore();
export { canvasStore };