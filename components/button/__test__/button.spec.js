import Vue from 'vue';
import Button from '../index';

// mock fn
const mockFn = jest.fn();
Button.methods = {
  handleClick() {
    mockFn.mockReturnValue('click run currectly');
  },
};

const Constructor = Vue.extend(Button);
const Instance = new Constructor({
  propsData: {
    type: 'ghost-primary',
    size: 'lg',
  },
}).$mount();

describe('Button component', () => {
  test('click function run currectly', () => {
    Instance.$el.click();
    expect(mockFn()).toBe('click run currectly');
  });

  test('component should match snapshot', () => {
    expect(Instance.$el).toMatchSnapshot();
  });
});
