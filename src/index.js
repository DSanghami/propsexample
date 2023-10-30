import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './MyComponents/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <AboutUs companyName ="Gavs" address="OMR"  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function <App firstName = "Sanghami" lastName = "Jeon Jungkook" address = "Korea" visitingTime = "11" name = "Jung"/>
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
