import { Row, Col } from '../components/grid';
import { Menu, MenuItem, SubMenu, Divider, MenuItemGroup } from '../components/menu';
import Button from '../components/button';
import Icon from '../components/icon';
import Badge from '../components/badge';

const components = {
  Row,
  Menu,
  MenuItem,
  SubMenu,
  Divider,
  MenuItemGroup,
  Button,
  Icon,
  Badge
};

const alias = {
  ...components,
  VntCol: Col,
  VButton: Button,
  vMenu: Menu,
  VMenuItem: MenuItem
};

const install = function install(Vue) {
  Object.keys(alias).forEach(key => {
    Vue.component(key, alias[key]);
  });
};

export default {
  install
};
