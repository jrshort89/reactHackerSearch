import "./App.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import SearchHistory from "./components/SearchHistory";

const App = () => {
  return (
    <div className="search">
      <h1>Hacker News Search</h1>
      <SearchHistory />
      <Search />
      <SearchResults />
    </div>
  );
};

export default App;
