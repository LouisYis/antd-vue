import { Row, Col } from '../components/grid';
import { Menu, MenuItem, SubMenu, Divider, MenuItemGroup } from '../components/menu';
import Button from '../components/button';
// import Icon from '../components/icon';

const components = {
  Row,
  Menu,
  MenuItem,
  SubMenu,
  Divider,
  MenuItemGroup,
  Button
};

const alias = {
  ...components,
  VntCol: Col,
  VButton: Button
};

const install = function install(Vue) {
  Object.keys(alias).forEach(key => {
    Vue.component(key, alias[key]);
  });
};

export default {
  install
};
