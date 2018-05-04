export default {
  name: 'VntItemGroup',
  compoenentName: 'VntItemGroup',
  inject: ['rootMenu'],
  render() {
    const { rootMenu, $slots } = this;
    const componentCls = `${rootMenu.prefixCls}-item-group`;

    return (
      <li class={`${componentCls}`}>
        <div class={`${componentCls}-title`}>{ $slots.title }</div>
        <ul class={`${componentCls}-list`}>{ $slots.default }</ul>
      </li>
    );
  }
};
