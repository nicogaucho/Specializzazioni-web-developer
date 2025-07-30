import { useEffect, useState } from "react";
import Count from "./components/Count";

function App() {
  const [showCount, setShowCount] = useState(true);

  useEffect(() => {
    console.log("App is mounted");
  }, []);

  useEffect(() => {
    console.log('Show count value is updating...', showCount);
  }, [showCount]);

  return (
    <>
      <h1>Component lifecycle</h1>
      {/* funzione pura, stateless */}
      <button onClick={() => setShowCount((prevValue) => !prevValue)}>Toggle Count</button>
      {/* funzione impura, usa valore di stato definito nell scope della funzione */}
      {/* <button onClick={() => setShowCount(!showCount)}>Toggle Count</button> */}
      {showCount ? <Count /> : null}
    </>
  );
}

export default App;
