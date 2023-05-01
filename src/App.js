import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Movies List</p>
        <p className="App-link" rel="noopener noreferrer">
          This will be a list of movies!
        </p>
      </header>
    </div>
  );
}

export default App;
