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
<vnt-badge size="normal">demo</vnt-badge>
<vnt-badge size="small"></vnt-badge>
```
:::

and color type
```html
<badge type="primary"></badge>
<badge type="success"></badge>
<badge type="warning"></badge>
<badge type="danger"></badge>
```

or custom all color
```html
<badge background-color="#fff" color="#888"></badge>
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
