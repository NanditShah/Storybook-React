import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Box from "@mui/material/Box";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header
        user={user}
        onLogin={() => setUser({name:"Nandit Shah"})
        }
        onLogout={() => setUser(null)}
      />
    </div>
  );
}

export default App;
