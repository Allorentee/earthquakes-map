import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { FiltersProvider } from './context/filters.tsx'
import { GlobalProvider } from './context/globals.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FiltersProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </FiltersProvider>
  </React.StrictMode>
)
