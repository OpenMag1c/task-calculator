import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'

import { store } from '@/store'
import theme from '@/theme'
import GlobalStyles from '@/globalStyles'
import Layouts from '@/layouts'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layouts>
            <Application />
          </Layouts>
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
)
