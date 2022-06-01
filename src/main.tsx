import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import AppStore from 'src/Store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={AppStore}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>

)
