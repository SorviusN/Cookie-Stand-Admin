import React, { useContext } from 'react'
import FunctionContextComponent from './FunctionContextComponent'

export default function App() {
    // Creating states.
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        // Turning value from true to false and vice versa.
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
        setLightTheme(prevLightTheme => !prevLightTheme);
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent/>
                <ClassConextComponent/>
            </ThemeContext.Provider>
        </>
    )
}