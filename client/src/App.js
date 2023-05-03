import { Info } from "./component/Info";
import { Search } from "./component/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search></Search>
      </header>
      <main>
        <Info></Info>
      </main>
    </div>
  );
}

export default App;
