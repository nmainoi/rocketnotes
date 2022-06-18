import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/details'
import { ThemeProvider } from "styled-components"
import GlobalStyles from './styles/global.js'
import theme from './styles/theme'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Details/>
    </ThemeProvider>
  </React.StrictMode>
)
