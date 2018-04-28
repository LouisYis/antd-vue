export default {
  functional: true,
  render(h, { props }) {
    const { type, spin } = props;
    const classes = [
      'anticon',
      {
        [`anticon-${type}`]: type,
        [`anticon-${spin}`]: spin
      }
    ];

    return h('i', { classes });
  }
};
