import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";
import "./DarkOrLight.css";

function DarkOrLight() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="zr-page" data-theme={theme}>
                <MainContent />
            </div>
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;