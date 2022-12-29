import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL ="https://loanapp-backend.onrender.com";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


