import React from 'react'
import ReactDOM from 'react-dom';
import Loading from '../index';
import {  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders Loading OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
    const three = renderer.create(<Loading/>).toJSON();
    expect(three).toMatchSnapshot()
});