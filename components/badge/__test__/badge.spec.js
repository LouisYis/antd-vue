import Vue from 'vue';
import Badge from '@/components/ui/badge';

const Constructor = Vue.extend(Badge);
const instance = new Constructor({
  propsData: {
    color: '#fff',
    type: 'error',
    size: 'small',
  },
}).$mount();

describe('Badge component', () => {
  test('component should match snapshot', () => {
    expect(instance.$el).toMatchSnapshot();
  });
});
