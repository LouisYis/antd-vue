/* @remove-on-es-build-begin */
const ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    console.warn &&
    typeof window !== 'undefined') {
  console.warn('You are using a whole package of antd-vue, ' +
    'please use https://www.npmjs.com/package/babel-plugin-component to reduce app bundle size.');
}
/* @remove-on-es-build-end */

const install = function install(Vue) {
  const components = require.context('../components', true, /index\.js/);
  components.keys().forEach((filename) => {
    const componentConfig = components(filename);
    const component = componentConfig.default || componentConfig;
    console.log(component);
    Vue.component(component.name, component);
  });
};

module.exports = { install };
module.exports.default = module.exports;
