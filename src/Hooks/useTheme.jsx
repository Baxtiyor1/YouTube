import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function useTheme(){
    let {theme, setTheme} = useContext(ThemeContext)

    return [theme, setTheme]
}

export default useTheme