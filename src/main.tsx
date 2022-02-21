import React from 'react'
import ReactDOM from 'react-dom'

import { Reset } from './style/reset'
import { Base } from './style/base'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
