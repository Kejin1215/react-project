import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Add } from './Add.tsx'
import Demo from './immerDemo.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App />
    <Add /> */}
    <Demo></Demo>
  </React.StrictMode>,
)
