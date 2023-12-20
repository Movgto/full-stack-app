import React from 'react';
import renderer from 'react-test-renderer';
import ReservationForm from '../../components/_mock_/ReservationForm';

describe('ReservationForm', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ReservationForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
