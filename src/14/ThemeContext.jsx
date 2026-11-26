import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;