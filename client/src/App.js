import "./App.css";
import "materialize-css";
import Title from "./components/title";
import Clock from "./components/Clock";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Title title="Справочник" />
      <Clock />
      <Users/>
    </div>
  );
}

export default App;
