import { useState } from "react";
import "./App.css";
import { UserContainer } from "./components/UserContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContainer />
    </>
  );
}

export default App;
