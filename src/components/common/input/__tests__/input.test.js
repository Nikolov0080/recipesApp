import React from 'react'
import ReactDOM from 'react-dom';
import Input from '../input';
import {  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders input OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
    const three = renderer.create(<Input label='test' name='test' type='text' />).toJSON();
    expect(three).toMatchSnapshot()
})

it('matches snapshot', () => {
    const three = renderer.create(<Input label='skillLevel' name='test' type='text' />).toJSON();
    expect(three).toMatchSnapshot()
})


