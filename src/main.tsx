import React from 'react'
import ReactDOM from 'react-dom/client'
import { FiltersProvider } from './context/filters.tsx'
import { App } from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
