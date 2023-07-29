import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import  './css/main.css'
// link css bootstrapreact
import 'bootstrap/dist/css/bootstrap.min.css';

//link animate 
import 'animate.css';

//link animate on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


