import navConfig from './nav.config.json';

// const DOC_MAP = require.context('../components', true, /\.md$/);
const DOC_MAP = {
  'zh-CN': require.context('../components', true, /\.zh-CN\.md$/),
  'en-US': require.context('../components', true, /\.en-US\.md$/),
};

const registerRoute = (config) => {
  const route = Object.keys(config).map((lang) => {
    const children = DOC_MAP[lang].keys().map((component) => {
      const name = component.split('/')[1];

      return {
        name: `component-${lang}-${name}`,
        path: name,
        component: DOC_MAP[lang](component).default || DOC_MAP[lang](component),
      };
    });

    const temp = {
      path: `/${lang}/docs`,
      component: () => import('./App'),
      children,
    };

    return temp;
  });

  return route;
};

const route = registerRoute(navConfig).concat([
  {
    path: '/',
    redirect: '/zh-CN/docs',
  },
  {
    path: '*',
    redirect: '/zh-CN/docs'
  },
]);

export default route;
