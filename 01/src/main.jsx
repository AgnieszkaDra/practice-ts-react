import 'modern-normalize/modern-normalize.css';
import './styles/fonts.scss';
import './styles/global.scss';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
