import './Menu.scss';
import { observer } from 'mobx-react-lite';
import { Button } from '../Button';
import { useMenuActions } from './useMenuActions';

export const Menu = () => {
  const menuActions = useMenuActions();
  return (
    <div className="menu">
      {menuActions.map(action => (
        <Button
          key={action.title}
          onClick={action.onClick}
        >
          {action.icon}
        </Button>
      ))}
    </div>
  );
};

observer(Menu);