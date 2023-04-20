import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './components/login_context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LoginProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </LoginProvider>
  </React.StrictMode>
);
