import React, { useContext } from 'react'
import {ThemeContext} from './Test'

export default function FunctionContextComponent() {
    // Retreiving the dark theme from ThemeContext, which is in the test file.
    const darkTheme = useContext(ThemeContext);
    
    // Assigning a style to the div below.
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#AAA',
        color: darkTheme ? '#AAA' : '#333',
        padding: '3rem',
        margin: '3rem'
    }
    return (
        <>
            <h1>Hello World</h1>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}