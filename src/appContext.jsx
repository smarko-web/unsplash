import { useState, createContext, useContext, useEffect } from "react";

const context = createContext();

export const useMyContext = () => {
    return useContext(context);
}

export const ContextWrapper = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', newDarkTheme);
    };


    return (
      <context.Provider
        value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
      >
        {children}
      </context.Provider>
    );
}