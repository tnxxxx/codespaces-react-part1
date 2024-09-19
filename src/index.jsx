import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './Hello';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello name="Jeff" last="tw" />
    <Hello name="Aom"  />
    <Hello last="pati"/>
    <Hello/> */}
    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
