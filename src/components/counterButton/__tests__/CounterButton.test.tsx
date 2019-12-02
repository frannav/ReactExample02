import React from "react";
import { shallow } from "enzyme";
import { CounterButton } from "../CounterButton";

describe('CounterButton', () => {
  describe('render', () => {
    test('Debería renderizar un componente de tipo button', () => {
      const wrapper = shallow(<CounterButton/>);
      expect(wrapper.find('button').text()).toBe('0');
    });
  });
});

