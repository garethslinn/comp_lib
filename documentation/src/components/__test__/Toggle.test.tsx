import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { RadioButton } from '../RadioButton';

import Adapter from 'enzyme-adapter-react-16';
import {Toggle} from "../Toggle";

configure({ adapter: new Adapter() });

describe('Toggle', () => {
  it('renders correctly', () => {
    const component = mount(
        <Toggle size="sm" label="Label" isDisabled={false} />
    );

    expect(component.find('.toggle-sm').length).toBe(1);
    expect(component.props()['isDisabled']).toBe(false);

  });
});
