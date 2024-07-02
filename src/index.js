import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './app/App'
import './app/icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)