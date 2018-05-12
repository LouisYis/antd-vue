/* eslint no-continue: 0 */
import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

const trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

export const on = (function GetFunction() {
  if (!isServer && document.addEventListener) {
    return function On(element, event, handler) {
      element.addEventListener(event, handler, false);
    };
  }

  return function On(element, event, handler) {
    element.attachEvent(`on${event}`, handler);
  };
}());

export const off = (function GetFunction() {
  if (!isServer && document.addEventListener) {
    return function Off(element, event, handler) {
      element.removeEventListener(event, handler, false);
    };
  }

  return function Off(element, event, handler) {
    element.detachEvent(`on${event}`, handler);
  };
}());


export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  }

  return (` ${el.className} `).indexOf(` ${cls} `) > -1;
}

export function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i += 1) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ` ${clsName}`;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
export function removeClass(el, cls) {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ` ${el.className} `;

  for (let i = 0, j = classes.length; i < j; i += 1) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(`${clsName}`, ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
