import Vue from 'vue';

const Popper = Vue.prototype.$isServer ? function Popper() { } : require('popper.js');

export default {

};
