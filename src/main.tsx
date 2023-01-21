import './style/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import App from './App'
import TestComp from './TestComp'

import './Translation/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/test' element={<TestComp/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
