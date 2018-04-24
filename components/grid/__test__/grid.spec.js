import Vue from 'Vue';
import { Row, Column } from '../index';

const GridInstance = new Vue({
  components: {
    Row,
    Column,
  },
  render(h) {
    const xs = {
      span: 6,
      pull: 2,
      offset: 3,
    };
    return (
      <Row gutter={10}>
        <Column span={12}>column 1</Column>
        <Column xs={xs}>column 2</Column>
        <Column span={6}>column 3</Column>
      </Row>
    );
  },
}).$mount();

describe('Grid component', () => {
  test('Grid should has gutter props', () => {
    expect(Row.props.gutter).not.toBe(undefined);
  });

  test('Column should has props', () => {
    expect(Column.props.span).not.toBe(undefined);
    expect(Column.props.offset).not.toBe(undefined);
    expect(Column.props.pull).not.toBe(undefined);
    expect(Column.props.push).not.toBe(undefined);
    expect(Column.props.xs).not.toBe(undefined);
    expect(Column.props.sm).not.toBe(undefined);
    expect(Column.props.md).not.toBe(undefined);
    expect(Column.props.lg).not.toBe(undefined);
    expect(Column.props.xl).not.toBe(undefined);
    expect(Column.props.prefix).not.toBe(undefined);
  });

  test('Column prefixe props should match vk', () => {
    expect(Column.props.prefix.default).toEqual('vk');
  });

  test('component should match snapshot', () => {
    expect(GridInstance.$el).toMatchSnapshot();
  });
});
