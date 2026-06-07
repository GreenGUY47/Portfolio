import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import "@fontsource/ruslan-display";
import '../i18n';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)