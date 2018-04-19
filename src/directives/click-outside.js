const clickoutsideContext = '$$clickoutsideContext';

let elVisible;

export default {
  bind(el, binding, vnode) {
    elVisible = vnode.context.show;

    const documentHandler = (e) => {
      if (vnode.context && !el.contains(e.target)) {
        if (elVisible && vnode.context.maskClosable) {
          vnode.context[el[clickoutsideContext].methodName]();
        }

        if (vnode.context.maskClosable !== undefined) return;

        // component is not modal if it havn't maskClosable attribute,
        // run methods auto
        vnode.context[el[clickoutsideContext].methodName]();
      }
    };

    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click',
    };

    document.addEventListener(el[clickoutsideContext].arg, documentHandler);
  },
  update(el, binding, vnode) {
    setTimeout(() => {
      elVisible = vnode.context.show;
    }, 0);

    el[clickoutsideContext].methodName = binding.expression;
  },
  unbind(el) {
    document.removeEventListener(el[clickoutsideContext].arg, el[clickoutsideContext].documentHandler);
  },
};
