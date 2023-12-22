import { useContext } from 'react'
import { ThemeContext } from './theme-context'
import styled from 'styled-components'
import { Sun } from './icons/sun'
import { Moon } from './icons/moon'

const PositionAbsolute = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
`

const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`


export const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <PositionAbsolute>
        <ToggleButton onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Moon /> : <Sun />}</ToggleButton>
    </PositionAbsolute>
  )
}
