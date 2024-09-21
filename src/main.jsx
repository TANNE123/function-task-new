import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { reduxStore } from './components/19-09-24tasks/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={reduxStore}>
     <StrictMode>
    <App />
  </StrictMode>
  </Provider>
 
)
