import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ViewportProvider from './viewport'
import MainApp from './MainApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ViewportProvider>
        <MainApp />
      </ViewportProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
