<script>
export default {
  data() {
    return {
      dot1: false,
      dot1Count: 0
    }
  },
  methods: {
    toggleDot1() {
      this.dot1 = !this.dot1;
    },
    increase(key) {
      this[key] += 1;
    },
    decrease(key) {
      this[key] -= 1;
    }
  }
}
</script>

<style lang="less">
.head-example {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
}

.vnt-badge {
  &:not(.vnt-badge-status) {
    margin-right: 20px;
  }
}
</style>

# Badge
Hightlight new item or unread notification

----

### Import
```javascript
import Badge from '@component/ui/badge'
```

### Useage
::: demo custom size
```html
<v-button @click="toggleDot1">toggle dot 1</v-button>
<v-button @click="increase('dot1Count')">increase</v-button>
<v-button @click="decrease('dot1Count')">decrease</v-button>

<badge :dot="dot1">demo</badge>
<badge :count="dot1Count"><a>demo</a></badge>
```
:::

::: demo 封顶数字
```html
<badge :count="99">
  <a href="#" class="head-example"></a>
</badge>
<badge :count="100">
  <a href="#" class="head-example"></a>
</badge>
<badge :count="99" :overflow-count="10">
  <a href="#" class="head-example"></a>
</badge>
<badge :count="1000" :overflow-count="999">
  <a href="#" class="head-example"></a>
</badge>
```
:::

::: demo 状态点
```html
<badge status="success"></badge>
<badge status="error"></badge>
<badge status="default"></badge>
<badge status="processing"></badge>
<badge status="warning"></badge>

<badge status="success" text="Success"></badge>
<badge status="error" text="Error"></badge>
<badge status="default" text="Default"></badge>
<badge status="processing" text="Processing"></badge>
<badge status="warning" text="Warning"></badge>
```

::: demo 独立使用
```html
<badge :count="25"></badge>
<badge :count="4" :styles="{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }"></badge>
<badge :count="109" styles="backgroundColor: #52c41a"></badge>
```

### API
| option          | description      | type   | acceptable values                | default |
| --------------- | ---------------- | ------ | -------------------------------- | ------- |
| size            | badge size       | string | normal, small                    | normal  |
| type            | badge color type | stirng | primary, success,warning, danger | primary |
| backgroundColor | backgroun color  | string |                                  |         |
| color           | font color       | string |                                  |         |

### slot
| name | description  |
| ---- | ------------ |
|      | text content |
