import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

// Verificar si el elemento existe antes de crear la raíz
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  );
} else {
  console.error('Elemento root no encontrado');
}
