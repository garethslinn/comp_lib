import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { Tooltip } from '../Tooltip';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tooltip', () => {
  it('renders correctly with correct class names', () => {
    const component = mount(
      <Tooltip position="top" type="primary" message={'hello'}>
        <div className="label-large bold">Target</div>
      </Tooltip>,
    );

    expect(component.length).toBe(1);
  });

  it('calls the initial state and mouse over state', () => {
    const component = shallow(
      <Tooltip position="top" type="primary" message={'hello'}>
        <div className="label-large bold">Target</div>
      </Tooltip>,
    );

    expect(component.state('isVisible')).toBe(false);
    component.find('.tooltip-trigger').simulate('mouseover');
    expect(component.state('isVisible')).toBe(true);
  });
});
