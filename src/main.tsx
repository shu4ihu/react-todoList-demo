import React from 'react'
import ReactDOM from 'react-dom/client'
import 'uno.css'
import App from './App.tsx'
import './index.css'
import '@unocss/reset/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
