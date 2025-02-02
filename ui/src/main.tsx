import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource-variable/inter';
import './index.css';

import App from './app.tsx';

const container = document.getElementById('steepbase');
if (!container) {
  throw new Error('Failed to find Steepbase root element (id=steepbase)');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
