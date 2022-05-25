import logo from "./logo.svg";
import "./App.css";

import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
      <footer className="App-footer">
        <a href="https://endearing-strudel-93a693.netlify.app">
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://www.instagram.com/bara_annamaria/">Annamaria Bara</a>
      </footer>
    </div>
  );
}

export default App;
