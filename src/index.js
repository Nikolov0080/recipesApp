import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from "./pageRouter/index";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
  document.getElementById('root')
);