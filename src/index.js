import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'

import { store } from '@/store'
import GlobalStyles from '@/globalStyles'
import Layouts from '@/layouts'
import themes from '@/constants/themes'
import { getTheme } from '@/helpers/getTheme'
import { Error } from '@/components/Error'
import { ERROR } from '@/constants/names'
import {
  getThemeFromStorage,
  setThemeToStorage,
} from '@/helpers/localStorage/theme'

export const ThemeContext = React.createContext(
  themes.lightTheme,
)

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: getThemeFromStorage(),
      isError: false,
    }
    this.toggleTheme = theme => {
      this.setState({ theme })
      setThemeToStorage(theme)
    }
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    return (
      <StrictMode>
        <Provider store={store}>
          <ThemeContext.Provider value={this.toggleTheme}>
            <ThemeProvider
              theme={getTheme(this.state.theme)}>
              <BrowserRouter>
                {this.state.isError ? (
                  <Error>{ERROR}</Error>
                ) : (
                  <Layouts>
                    <Application />
                  </Layouts>
                )}
                <GlobalStyles />
              </BrowserRouter>
            </ThemeProvider>
          </ThemeContext.Provider>
        </Provider>
      </StrictMode>
    )
  }
}

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root'),
)
