import React from 'react'
import ReactDOM from 'react-dom';
import Header from '../index';
import {Nav} from 'react-bootstrap';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('header renders OK',()=>{
const div = document.createElement("div");
ReactDOM.render(<Header />, div);
ReactDOM.unmountComponentAtNode(div);
});


