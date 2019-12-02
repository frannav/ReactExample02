import { shallow } from "enzyme";
import React from "react";
import { NumberPicker } from "../NumberPicker";

describe("NumberPicker", () => {
  describe("render", () => {
    test("Deberia renderizar un Button", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.exists('button')).toBeTruthy();
    });
    test("Deberia renderizar un Button con un texto de un +", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button').at(0).text()).toBe('+');
    });
    test("Deberia renderizar otro button con un texto de un -", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button').at(1).text()).toBe('-');
    });
    test("Deberia renderizar un h1 con el texto 0", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('h1').text()).toBe('0');
    });
    describe('Increment/decrement', () => {
      test("Deberia renderizar un 1 cuando se haya hecho un click en el boton +", () => {
        const wrapper = shallow(<NumberPicker/>);
        wrapper.find("button").at(0).simulate("click");
        expect(wrapper.find("h1").text()).toBe("1");
      });
      test("Deberia renderizar un -1 cuando se haya hecho un click en el boton -", () => {
        const wrapper = shallow(<NumberPicker/>);
        wrapper.find("button").at(1).simulate("click");
        expect(wrapper.find("h1").text()).toBe("-1");
      });
    });
  });

  describe('InitialValue', () => {
    test('debería renderizar un h1 con el valor inicial pasado por props', () => {
      const wrapper = shallow(<NumberPicker initialCounter={20}/>);
      expect(wrapper.find('h1').text()).toBe("20");
    });
  });

  describe('events', () => {
    test('se debería llamar a la función onIncrement cuando se aprete el botón +', () => {
      const spy = jest.fn();
      const wrapper = shallow(<NumberPicker initialCounter={20} onIncrement={spy}/>);
      wrapper.find('button').at(0).simulate('click');
      expect(spy).toBeCalled();
    });

    test('se debería llamar a la función onIncrement cuando se aprete el botón + con valor 24', () => {
      const spy = jest.fn();
      const wrapper = shallow(<NumberPicker initialCounter={23} onIncrement={spy}/>);
      wrapper.find('button').at(0).simulate('click');
      expect(spy).toBeCalledWith(24);
    });
  });
});
