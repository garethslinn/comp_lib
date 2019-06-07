import * as React from 'react';
import { mount, configure, shallow } from 'enzyme';
import {Alert} from '../Alert';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Alert', () => {
    it('renders correctly', () => {
        const component = mount(
            <Alert action={() => {}} alertType="information" iconType="secondary">
            <span>
            Information
            </span>
            </Alert>);

        expect(component.find('.alert').length).toBe(1);
        expect(component.find('.information').length).toBe(1);
        expect(component.find('.information').length).toBe(1);
    });
});
