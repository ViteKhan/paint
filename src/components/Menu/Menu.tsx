import './Menu.scss';
import { observer } from 'mobx-react-lite';
import { MENU_ACTIONS } from '../../constants';
import { Button } from '../Button';

export const Menu = () => {
  return (
    <div className="menu">
      {MENU_ACTIONS.map(action => (
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