import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { SearchProvider } from './contexts/SearchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Router>
  </React.StrictMode>
);
