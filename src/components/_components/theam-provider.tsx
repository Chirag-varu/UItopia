import * as React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(() => {
    // Retrieve theme from localStorage or default to light
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    // Apply the theme to the document's root element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: "light", // Default theme
  toggleTheme: () => {}, // Default toggleTheme function
});
