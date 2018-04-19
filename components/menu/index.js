import '@/styles/index';
import '@/styles/components/menu.less';

import Menu from './src/menu';
import MenuItem from './src/menu-item';
import SubMenu from './src/sub-menu';
import Divider from './src/divider';
import ItemGroup from './src/item-group';

Menu.MenuItem = MenuItem;
Menu.SubMenu = SubMenu;
Menu.Divider = Divider;
Menu.ItemGroup = ItemGroup;

export default Menu;
