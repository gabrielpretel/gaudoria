import { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button onClick={toggleTheme}>
      Cambiar a {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}

export default ThemeToggle;
