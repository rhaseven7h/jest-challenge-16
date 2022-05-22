import React from 'react';
import { shallow, mount, render } from 'enzyme';

import AddItem from "./AddItem";

describe('Test AddItem using Enzyme shallow', function() {
    it('should render successfully', function() {
        const inputText = "My new value input";
        const addItemOnAdd = jest.fn();
        const wrapper = shallow(<AddItem onAdd={addItemOnAdd}/>);
        expect(wrapper).not.toBeNull();
        expect(wrapper.find('label').length).toEqual(1);
        expect(wrapper.find('input[type="text"]').length).toEqual(1);
        expect(wrapper.find('input[type="submit"]').length).toEqual(1);
        wrapper.find('input').at(0).simulate('change', { target: { value: inputText } })
        expect(wrapper.find('input').at(0).prop('value')).toMatch(/new value/i);
        wrapper.find('form').at(0).simulate('submit', {
            preventDefault: jest.fn(),
        });
        expect(addItemOnAdd).toHaveBeenCalledTimes(1);
        expect(addItemOnAdd).toHaveBeenNthCalledWith(1, inputText);
        expect(addItemOnAdd.mock.calls[0][0]).toMatch(/new value/i);
    });
})

describe('Test AddItem using Enzyme mount', function() {
    it('should render successfully', function() {
        const inputText = "My new value input";
        const onAddItemHandler = jest.fn();
        const wrapper = mount(<AddItem onAdd={onAddItemHandler}/>);
        expect(wrapper.find('label').length).toBe(1);
        expect(wrapper.exists('label')).toEqual(true);
        expect(wrapper.find('label').text()).toMatch(/New.*item/i);
        expect(wrapper.find('input[type="text"]').length).toBe(1);
        expect(wrapper.find('input[type="submit"]').length).toBe(1);
        wrapper.find('input[type="text"]').at(0).simulate('change', { target: { value: inputText } });
        expect(wrapper.find('input[type="text"]').at(0).prop('value')).toBe(inputText);
        wrapper.find('input[type="submit"]').at(0).simulate('submit');
        expect(onAddItemHandler).toHaveBeenCalledTimes(1);
        expect(onAddItemHandler).toHaveBeenNthCalledWith(1, inputText);
        expect(onAddItemHandler.mock.calls[0][0]).toMatch(/new value/i);
    });
});

describe('Sample test of static rendering', function() {
    it('should render statically', function() {
        const wrapper = render(
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        );
        expect(wrapper.find('li').length).toBe(3);
        expect(wrapper.find('ul li:nth-child(1)').text()).toBe('One');
    });
});
