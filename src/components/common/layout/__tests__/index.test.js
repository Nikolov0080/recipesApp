import React from 'react'
import ReactDOM from 'react-dom';
import Layout from '../index';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders input OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
    const child = <h1>test children</h1>

    const three = renderer.create(<Layout>{child}</Layout>).toJSON();
    expect(three).toMatchSnapshot();
})