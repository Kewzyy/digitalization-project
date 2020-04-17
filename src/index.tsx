import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core'
import { theme } from './config/theme'
import { ApplicationRouter } from './Application'

import * as serviceWorker from './serviceWorker'

console.log('theme', theme)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApplicationRouter />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
