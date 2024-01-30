import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(true);

    return (
        <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
