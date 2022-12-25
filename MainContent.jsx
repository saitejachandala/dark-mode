import React from "react";
import "./MainContent.css";
function MainContent(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thoousands of enterprise app, including mobile apps</li>
      </ul>
    </main>
  );
}
export default MainContent;
