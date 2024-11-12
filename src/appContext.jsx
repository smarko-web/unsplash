import { useState, createContext, useContext, useEffect } from "react";

const context = createContext();

export const useMyContext = () => {
    return useContext(context);
}
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const storedDarkMode = localStorage.getItem('darkTheme');

    if (storedDarkMode === null) {
      return prefersDarkMode;
    }

    return storedDarkMode === 'true';
}
export const ContextWrapper = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || 'cars');

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', isDarkTheme)
        // const body = document.querySelector('body');
        // body.classList.toggle('dark-theme', newDarkTheme);
    };

    useEffect(() => {
      document.body.classList.toggle('dark-theme', isDarkTheme);
      // localStorage.setItem('darkTheme', isDarkTheme);
    }, [isDarkTheme]);

    return (
      <context.Provider
        value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
      >
        {children}
      </context.Provider>
    );
}