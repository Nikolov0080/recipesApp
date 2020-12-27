import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from "./pageRouter/index";
import './main.css'
import "bootswatch/dist/journal/bootstrap.min.css";
ReactDOM.render(
  //  <React.StrictMode>
    <PageRouter />,
  //  {/* </React.StrictMode>, */}
  document.getElementById('root')
);