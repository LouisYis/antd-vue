import Vue from 'vue'
import BreadCrumb from '../index'

const Constructor = Vue.extend(BreadCrumb)
const Instance = new Constructor({
  propsData: {
    routes: ['home', 'hello'],
    separator: '>'
  }
}).$mount()

describe('BreadCrumb component', () => {
  test('component should match snapshot', () => {
    expect(Instance.$el).toMatchSnapshot()
  })
})
