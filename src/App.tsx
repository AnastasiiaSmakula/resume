import { useRef } from "react";

import "./App.css";
import Top from "./Top";
import Body from "./Body";

function App() {
  const aboutRef = useRef<Element | null>(null);
  const educationRef = useRef<Element | null>(null);
  const workRef = useRef<Element | null>(null);

  // usestate
  // provider ktory pouziva ten usestate + estee v komponentoch pouzit useContext
  return (
    <>
      <Top aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} />
      <Body aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} />
    </>
  );
}

export default App;
