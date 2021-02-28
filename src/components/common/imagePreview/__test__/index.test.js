import React from 'react'
import ReactDOM from 'react-dom';
import ImagePreview from '../index';
import '@testing-library/jest-dom/extend-expect';

it('renders imagePreview OK',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<ImagePreview/>,div);
    ReactDOM.unmountComponentAtNode(div)
});