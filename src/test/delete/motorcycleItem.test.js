import React from 'react';
import renderer from 'react-test-renderer';
import MotorcycleItem from '../../components/_mock_/MotorcycleItem';

describe('MotorcycleItem', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MotorcycleItem />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
