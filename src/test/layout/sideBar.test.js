import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from '../../components/_mock_/Sidebar';

describe('MotorItem', () => {
  it('renders correctly', () => {
    const component = renderer.create(<SideBar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
