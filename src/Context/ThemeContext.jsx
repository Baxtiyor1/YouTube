import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

function ThemeProvider({children}){
    let [theme, setTheme] = useState(JSON.parse(window.localStorage.getItem('theme')) || 'light')
    
    useEffect(()=>{
        window.localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}

export {ThemeContext, ThemeProvider}