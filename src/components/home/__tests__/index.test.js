import React from 'react'
import ReactDOM from 'react-dom';
import Home from '../index';
import {  cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders Home OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
    const three = renderer.create(<Home/>).toJSON();
    expect(three).toMatchSnapshot()
});