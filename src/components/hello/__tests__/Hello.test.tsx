import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from "../Hello";

describe('Hello', () => {
  describe('render', () => {
    test('Debería renderizar con un nombre correcto', () => {
      const wrapper = shallow(<Hello name="Juan"/>);
      expect(wrapper.find('h1').text()).toBe('Hello Juan');
    });
  });
});
