import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { Button } from '../Button';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders correctly', () => {
    const component = mount(
      <Button
        action={() => {}}
        buttonType="primary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={true}
      >
        <span>Active</span>
      </Button>,
    );

    expect(component.find('.button').length).toBe(1);
    expect(component.find('.button-primary').length).toBe(1);
    expect(component.props()['isButtonDisabled']).toBe(false);
    expect(component.props()['isButtonSmall']).toBe(false);
    expect(component.props()['isButtonWithIcon']).toBe(false);
    expect(component.props()['isBlock']).toBe(true);
  });
});
