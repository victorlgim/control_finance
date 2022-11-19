import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { useState } from "react";
import React from "react";

function App() {
  const [state, setState] = useState(false);

  return (
    <>
      {state ? (
        <UserPage setState={setState} />
      ) : (
        <HomePage setState={setState} />
      )}
    </>
  );
}

export default App;
