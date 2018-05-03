<script>
  export default {
    methods: {
      test() {
        console.log('111');
      }
    }
  }
</script>

:::demo 按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
```html
<v-button type="primary" @click="test">Primary</v-button>
<v-button>Default</v-button>
<v-button type="dashed">Dashed</v-button>
<v-button type="danger">Danger</v-button>
```
:::

::: demo 当需要在 `v-button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `v-button` 内使用 `Icon` 组件。如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

```html
<v-button type="primary" shape="circle" icon="search"></v-button>
<v-button type="primary" icon="search">Search</v-button>

<v-button shape="circle" icon="search"></v-button>
<v-button icon="search">Search</v-button>

<v-button type="dashed" shape="circle" icon="search"></v-button>
<v-button type="dashed" icon="search">Search</v-button>

<v-button type="danger" shape="circle" icon="search"></v-button>
<v-button type="danger" icon="search">Search</v-button>
```
:::
