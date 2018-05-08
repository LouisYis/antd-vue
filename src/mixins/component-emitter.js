function broadcast(componentName, event, params) {
  this.$children.forEach(child => {
    const name = child.$options.componentName;

    if (name === componentName) {
      child.$emit(event, params);
    } else {
      broadcast.apply(child, [componentName, event, params]);
    }
  });
}

export default {
  methods: {
    dispatch(componentName, event, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) name = parent.$options.componentName;
      }

      parent.$emit(event, params);
    },
    broadcast(componentName, event, params) {
      broadcast.call(this, componentName, event, params);
    }
  }
};
