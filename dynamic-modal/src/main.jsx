import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/funcComp/App';
import AppClass from './classComp/AppClass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>,
)
