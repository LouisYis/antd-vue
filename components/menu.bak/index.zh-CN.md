<script>
export default {
  methods: {
    handleClick() {
      console.log('click ', e);
    }
  }
}
</script>

::: demo 顶部导航
```html
<v-menu
  onClick="this.handleClick"
  selectedKeys="[this.state.current]"
  mode="horizontal"
>
  <v-menu-item index="mail">
    <Icon type="mail"></Icon>Navigation One
  </v-menu-item>
  <v-menu-item index="app" disabled>
    <Icon type="appstore"></Icon>Navigation Two
  </v-menu-item>
  <sub-menu>
    <menu-item-group title="Item 1">
      <v-menu-item index="setting:1">Option 1</v-menu-item>
      <v-menu-item index="setting:2">Option 2</v-menu-item>
    </menu-item-group>
    <menu-item-group title="Item 2">
      <v-menu-item index="setting:3">Option 3</v-menu-item>
      <v-menu-item index="setting:4">Option 4</v-menu-item>
    </menu-item-group>
  </sub-menu>
  <v-menu-item index="alipay">
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
  </v-menu-item>
</menu>
```
:::
