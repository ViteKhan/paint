import { makeAutoObservable } from 'mobx';
import Tool from '../models/Tool';

class ToolStore {
  tool: Tool | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool = (tool: Tool | null) => {
    this.tool = tool;
  };

  setFillColor = (color: string) => {
    this.tool!.fillColor = color;
  };

  setStrokeColor = (color: string) => {
    this.tool!.strokeColor = color;
  };

  setLineWidth = (width: number) => {
    this.tool!.lineWidth = width;
  };
}

const toolStore = new ToolStore();
export { toolStore };