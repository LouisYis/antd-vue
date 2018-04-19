import Vue from 'vue'
import DropDown from '../index'
import { MenuItem, SubMenu } from '@/components/ui/menu'

const DropdownInstance = new Vue({
  components: {
    DropDown,
    SubMenu,
    [MenuItem.name]: MenuItem
  },
  methods: {
    getChild(key, len) {
      let children = []
      for (let i = 0; i < len; i++) {
        children.push(<vk-menu-item keyVal={`${key}.${i}`}>{`item ${key}.${i}`}</vk-menu-item>)
      }
      return children
    }
  },
  render(h) {
    return (
      <drop-down position="topright">
        <a slot="button">button 1</a>
        <sub-menu title="item 1">
          {this.getChild('1', 3)}
          <sub-menu title="item 5">
            {this.getChild('1.1', 4)}
          </sub-menu>
        </sub-menu>
        <vk-menu-item key-val="2">item 2</vk-menu-item>
        <sub-menu title="item 3">
          {this.getChild('3', 4)}
        </sub-menu>
        <vk-menu-item key-val="4">item 4</vk-menu-item>
      </drop-down>
    )
  }
}).$mount()

describe('Dropdown component', () => {
  test('component should match snapshot', () => {
    expect(DropdownInstance.$el).toMatchSnapshot()
  })
})
