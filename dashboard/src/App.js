import { useContext } from "react";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { StatsContext } from "./Components/AppContext/StatsContext";

function App() {
  const{active,setActive, axios, user, setUser}=useContext(StatsContext)
  return (
    <div className="App">
        <Header active={active} setActive={setActive} axios={axios} user={user} setUser={setUser}/>
        <Home active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
