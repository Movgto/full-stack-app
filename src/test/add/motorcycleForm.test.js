import React from 'react';
import renderer from 'react-test-renderer';
import MotorcycleForm from '../../components/_mock_/MotorcycleForm';

describe('MotorcycleForm', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MotorcycleForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
