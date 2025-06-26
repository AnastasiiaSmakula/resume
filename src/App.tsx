import { useEffect, useRef, useState } from "react";

import "./App.css";
import Top from "./Top";
import Body from "./Body";
import { NightModeContext } from "./NightModeContext";

function App() {
  const aboutRef = useRef<Element | null>(null);
  const educationRef = useRef<Element | null>(null);
  const workRef = useRef<Element | null>(null);

  // usestate
  // provider ktory pouziva ten usestate + estee v komponentoch pouzit useContext
  const [mode, setMode] = useState(
    localStorage.getItem("mode") === "night-mode"
  );

  useEffect(() => {
    if (mode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [mode]);

  return (
    <NightModeContext.Provider value={{ mode, setMode }}>
      <Top aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} />
      <Body aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} />
    </NightModeContext.Provider>
  );
}

export default App;
