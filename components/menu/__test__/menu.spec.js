import Vue from 'Vue'
import { Menu, MenuItem, SubMenu } from '../index'

let selectId = null

const MenuInstance = new Vue({
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    SubMenu
  },
  methods: {
    getChild(id, len) {
      let children = []
      for (let i = 0; i < len; i++) {
        children.push(<vk-menu-item keyVal={`${id}.${i}`}>{`${id}.${i}`}</vk-menu-item>)
      }
      return children
    }
  },
  render(h) {
    const props = {
      type: 'vertical',
      defaultSelect: '1.0',
      autoClose: true,
      onSelect(key) {
        selectId = key
      }
    }
    return (
      <vk-menu {...{props}}>
        <SubMenu title="item 1">
          {this.getChild(1, 3)}
          <SubMenu title="item 5">
            {this.getChild(2, 3)}
          </SubMenu>
        </SubMenu>
        <vk-menu-item key-val="2">item 2</vk-menu-item>
        <SubMenu title="item 3">
          {this.getChild(3, 2)}
        </SubMenu>
        <vk-menu-item key-val="4">item 4</vk-menu-item>
      </vk-menu>
    )
  }
}).$mount()

describe('Menu component', () => {
  test('component should match snapshot', () => {
    expect(MenuInstance.$el).toMatchSnapshot()
  })

  test('component select func run currectly', () => {
    expect(selectId).not.toBeNull
  })

  test('component props required', () => {
    expect(Menu.props.onSelect).not.toBeUndefined()
  })
})

describe('Menu item component', () => {
  test('component props required', () => {
    expect(MenuItem.props.keyVal).not.toBeUndefined()
  })
})

describe('SubMenu item component', () => {
  test('component props required', () => {
    expect(SubMenu.props.title).not.toBe(undefined)
  })

  test('component data required', () => {
    expect(SubMenu.data().isOpen).toBe(false)
  })
})
