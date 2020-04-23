import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { App } from './app'
import './styles/main.css'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, 
    mountNode)

