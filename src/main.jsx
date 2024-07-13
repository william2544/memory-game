import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HundleInput from './class.jsx'
import './index.css'
import ClassInput from './classb.jsx'
import Game from './game.jsx'
import Counter from './classCount.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Game />
    <ClassInput />
    <Counter />
  </React.StrictMode>,
)
