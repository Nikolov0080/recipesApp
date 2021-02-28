import React from 'react'
import ReactDOM from 'react-dom';
import Input from '../index';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders OK', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Input/>,div);
    ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot inputImage2',()=>{
    const three = renderer.create(<Input  />).toJSON();
    expect(three).toMatchSnapshot();
})