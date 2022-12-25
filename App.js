import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

export default App;
