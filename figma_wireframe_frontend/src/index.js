import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './design-system.css'; // bring in design tokens and typography
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
