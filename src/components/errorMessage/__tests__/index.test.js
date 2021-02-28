import React from 'react'
import ReactDOM from 'react-dom';
import ErrMsg from '../index';
import {  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders ErrMsg OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrMsg />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
    const three = renderer.create(<ErrMsg text="test" variant="auth"/>).toJSON();
    expect(three).toMatchSnapshot()
});

it('matches snapshot', () => {
    const three = renderer.create(<ErrMsg text="test" variant="info"/>).toJSON();
    expect(three).toMatchSnapshot()
});

it('matches snapshot', () => {
    const three = renderer.create(<ErrMsg  variant="info"/>).toJSON();
    expect(three).toMatchSnapshot()
});