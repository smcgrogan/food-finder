import logo from "./logo.svg";
import "./App.css";
import RestaurantList from "./components/RestaurantList.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <div>
      <SearchBar title="Summer" />
      <RestaurantList title="Halle" />
    </div>
  );
}

export default App;
