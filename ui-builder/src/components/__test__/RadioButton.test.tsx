import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { RadioButton } from '../RadioButton';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Radio button', () => {
  it('renders correctly', () => {
    const component = mount(
        <RadioButton
            isSmall={true}
            id={'rad1'}
            name={'radio2'}
            isChecked={true}
            isDisabled={false}
            label={'Option1'}
        />
    );

    expect(component.find('.radio-label').length).toBe(1);
    expect(component.find('input').props()['id']).toBe('rad1');
    expect(component.find('input').props()['name']).toBe('radio2');
    expect(component.text().includes('Option1')).toBe(true);
    expect(component.props()['isSmall']).toBe(true);
    expect(component.props()['isChecked']).toBe(true);
    expect(component.props()['isDisabled']).toBe(false);

  });
});
