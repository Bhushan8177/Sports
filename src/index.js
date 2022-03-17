import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import Home from './imgs/slide.js';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Footer from './footer';
// import Navbar from'./Navbar/Navbar';
ReactDOM.render(
  
  <React.StrictMode>
   <App />
    {/* <Navbar/> */}
  </React.StrictMode>,
  
  document.getElementById('root')

  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
  
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );