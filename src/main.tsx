import 'regenerator-runtime';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

// styles
import './index.css';
import './font.css';
import 'tailwindcss/tailwind.css';

import App from '~/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
