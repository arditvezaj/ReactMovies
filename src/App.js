import Movies from "./components/Movies";
import AddNewMovie from "./pages/AddNewMovie";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Movies />
        <AddNewMovie />
      </header>
    </div>
  );
}

export default App;
