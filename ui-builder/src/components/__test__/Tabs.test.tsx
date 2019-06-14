import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { Tabs } from '../Tabs';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tabs', () => {
  it('renders correctly for large tabs and not basic', () => {
    const component = mount(
      <Tabs isTabSmall={false} isBasic={false}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
      </Tabs>,
    );

    expect(component.length).toBe(1);
    expect(component.find('.tabs-lg').length).toBe(1);
    expect(component.find('.tabs-basic').length).toBe(0);
  });

  it('renders correctly for small tabs and not basic', () => {
    const component = mount(
      <Tabs isTabSmall={true} isBasic={true}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
      </Tabs>,
    );

    expect(component.length).toBe(1);
    expect(component.find('.tabs-sm').length).toBe(1);
    expect(component.find('.tabs-basic').length).toBe(1);
  });

  it('renders the first tab as active only', () => {
    const component = mount(
      <Tabs isTabSmall={true} isBasic={true}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
      </Tabs>,
    );

    expect(component.find('.tab').first().hasClass('active')).toBe(true);
    expect(component.find('.tab').at(1).first().hasClass('active')).toBe(false);
  });

  it('has an initial state active of zero', () => {
    const component = shallow(
      <Tabs isTabSmall={false} isBasic={false}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
      </Tabs>,
    );
    expect(component.state('active')).toBe(0);
  });
});
