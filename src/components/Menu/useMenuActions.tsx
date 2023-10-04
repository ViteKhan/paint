import { ReactComponent as UndoIcon } from '../../assets/icons/undo.svg';
import { ReactComponent as RedoIcon } from '../../assets/icons/redo.svg';
import { ReactComponent as SaveIcon } from '../../assets/icons/save.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { canvasStore } from '../../stores/CanvasStore';

export const useMenuActions = () => {
  const onSave = () => {
    const dataUrl = canvasStore.canvas?.toDataURL();

    if (dataUrl) {
      const link = document.createElement('a');
      link.href = dataUrl;
      // eslint-disable-next-line
      link.download = `${+new Date}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return [
    { onClick: () => canvasStore.undo(), title: 'Undo', icon: <UndoIcon/> },
    { onClick: () => canvasStore.redo(), title: 'Redo', icon: <RedoIcon/> },
    { onClick: () => onSave(), title: 'Save', icon: <SaveIcon/> },
    { onClick: () => canvasStore.clear(), title: 'Clear', icon: <TrashIcon/> },
  ];
};