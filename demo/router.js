import navConfig from './nav.config.json';

// const DOC_MAP = require.context('../components', true, /\.md$/);
const PAGE_MAP = {
  'zh-CN': require.context('./pages/zh-CN', false, /\.vue$/),
  'en-US': require.context('./pages/en-US', false, /\.vue$/)
};

const DOC_MAP = {
  'zh-CN': require.context('../components', true, /\.zh-CN\.md$/),
  'en-US': require.context('../components', true, /\.en-US\.md$/)
};

const registerRoute = config => {
  const route = [];

  Object.keys(config).forEach(lang => {
    const children = DOC_MAP[lang].keys().map(component => {
      const name = component.replace(/.+\/(.+)\/.+\.md$/, '$1');
      console.log(component, name);
      // const name = component.split('/')[1];
      return {
        name: `component-${lang}-${name}`,
        path: name,
        component: DOC_MAP[lang](component).default || DOC_MAP[lang](component),
      };
    });

    PAGE_MAP[lang].keys().forEach(page => {
      const name = page.replace(/\.\/(.+)\.vue$/, '$1');
      const temp = {
        name: `page-${lang}-${name}`,
        path: `/${lang}/${name}`,
        component: PAGE_MAP[lang](page).default || PAGE_MAP[lang](page)
      };
      if (name === 'component') temp.children = children;

      route.push(temp);
    });
  });

  return route;
};

const routes = registerRoute(navConfig).concat([
  {
    path: '/',
    redirect: '/zh-CN/component',
  },
  {
    path: '*',
    redirect: '/zh-CN/component'
  }
]);

export default routes;
