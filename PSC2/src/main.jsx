import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import {ChakraProvider} from '@chakra-ui/react'
import { Provider } from "react-redux"
import { store } from './redux/store.jsx'
// import store from './redux/store.jsx'
// import store from './redux/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>,
)
