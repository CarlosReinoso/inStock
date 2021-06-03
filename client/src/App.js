import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/:location" component={Header} />

      <button>Save</button>
      <button className="button-secondary">Save</button>
      <button className="button-delete">Save</button>
      <button>Save</button>
      <p>This is remy test</p>
    </div>
  );
}

export default App;
