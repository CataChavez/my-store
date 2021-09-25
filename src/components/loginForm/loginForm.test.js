import React from "react";
import Enzyme, { shallow } from "enzyme";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginForm } from "./LoginForm";
import { storeIndex} from '../../store/storeIndex';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe('test in <LoginForm />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={storeIndex}>
        <LoginForm />
      </Provider>
    );
  });
  
  test('<LoginForm /> its render fine', () => {
    expect(wrapper.find(LoginForm)).toBeDefined();

    const emailField = wrapper.find('#email');
    const emailValue = emailField.get(0).props.value;
    expect(emailValue).toEqual('');

    const passwordField = wrapper.find('#password');
    const passwordValue = passwordField.get(0).props.value;
    expect(passwordValue).toEqual('');

    const buttonSubmit = wrapper.find('#buttonSubmit').get(0);
    expect(buttonSubmit).toBeDefined();

  });

  /* it('calls onSubmit with form data on submit button click', async () => {
    const emailField = wrapper.find('#email').first();
    const passwordField = wrapper.find('#password').first();
    const buttonSubmit = wrapper.find('#buttonSubmit').first();

    await act (async () => {
      await passwordField.prop('onChange')({
        target: { name: 'password', value: 'abc123' },
      })
      await emailField.prop('onChange')({
        target: { name: 'email', value: 'contacto@taller.com' },
      });
    });
    buttonSubmit.simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1); 
  })*/
});