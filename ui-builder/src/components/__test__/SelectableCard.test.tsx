import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import { SelectableCard } from '../SelectableCard';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SelectableCard', () => {
  it('renders correctly', () => {
    const component = mount(
      <SelectableCard
        action={() => {}}
        title="my title"
        description="desc"
        isDisabled
      >
        <span>Disabled</span>
      </SelectableCard>,
    );

    expect(component.find('.selectable-card').length).toBe(1);
    expect(component.props()['title']).toEqual('my title');
    expect(component.props()['isDisabled']).toBe(true);
  });
});
