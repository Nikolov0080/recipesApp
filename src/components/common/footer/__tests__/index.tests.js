import React from 'react'
import ReactDOM from 'react-dom';
import Footer from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("footer renders OK", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders footer correctly', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toHaveTextContent("footer");
    expect(getByTestId("footer"))
});