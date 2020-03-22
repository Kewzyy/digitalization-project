import * as React from 'react'
import { LandingPage } from './components/pages/landing-page'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './config/theme'
console.log("theme", theme)
const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <LandingPage />
        </ThemeProvider>

    )
}
export default App
