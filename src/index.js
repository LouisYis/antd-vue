/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
const ENV = process.env.NODE_ENV
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
  console.warn(
    'You are using a whole package of antv, ' +
    'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.'
  )
}
/* @remove-on-es-build-end */

export { default as Grid } from './components/grid'

export { default as Breadcrumb } from './components/breadcrumb'

export { default as Button } from './components/button'

export { default as Dropdown } from './components/dropdown'

export { default as Menu } from './components/menu'

export { default as Pagination } from './components/pagination'

export { default as Modal } from './components/modal'
