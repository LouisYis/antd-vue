import { Row, Col } from '../components/grid';
import { Menu, MenuItem, SubMenu, Divider, MenuItemGroup } from '../components/menu';
import Button from '../components/button';

const components = [
  Row,
  Col,
  Menu,
  MenuItem,
  SubMenu,
  Divider,
  MenuItemGroup,
  Button
];

const install = function install(Vue) {
  components.forEach(file => {
    console.log(file.name);
    Vue.component(file.name, file);
  });
};

module.exports = { install };
module.exports.default = module.exports;
