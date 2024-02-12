import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { GlobalProvider } from './context/globals.tsx'
import { FiltersProvider } from './context/options.tsx'
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
