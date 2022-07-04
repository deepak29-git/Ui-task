import "./App.css";
import { Main } from "./Components/Main/Main";
import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <div className="grid-container">
      <Main/>
      </div>
  </div>
  );
}

export default App;
