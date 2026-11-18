import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.css';
import './styles/v2-polish.css';
import './styles/v2-round2.css';
import './styles/v2-round3.css';
import './styles/v2-r4.css';
import './styles/scene.css';
import './styles/v2-r5.css';
import './styles/v2-r6.css';
import App from './App.jsx';

/* the page's CSS expects these two classes on <html> once scripting is available */
document.documentElement.classList.add('js', 'v2-js');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
