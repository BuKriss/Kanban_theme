import React, { useState } from "react";
import TaskBoard from './components/TaskBoard';
import "./index.css";

export const THEMES = {
  light: "light",
  dark: "dark"
};

export const ThemeContext = React.createContext(THEMES.light);

function App() {
  const [theme, setTheme] = useState(THEMES.light);
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className="container">
        <input
          id="light-theme-radio"
          type="radio"
          checked={theme === THEMES.light}
          onClick={() => setTheme(THEMES.light)}
        />
        <label htmlFor="light-theme-radio">Light theme</label>
        <input
          id="dark-theme-radio"
          type="radio"
          checked={theme === THEMES.dark}
          onClick={() => setTheme(THEMES.dark)}
        />
        <label htmlFor="dark-theme-radio">Dark theme</label>
      </div>
      <TaskBoard/>
      </ThemeContext.Provider>
  );
}

export default App;
