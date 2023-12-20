import { GlobalStyle } from './styles'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, dark, light } from './theme-context'
import { useState } from 'react'


export const AppWrapper = () => {
  const [theme, toggleTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle />
          <App />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
