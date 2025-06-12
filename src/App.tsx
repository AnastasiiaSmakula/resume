import { useRef } from "react";

import "./App.css";
import Top from "./Top";
import Body from "./Body";

function App() {
  const aboutRef = useRef<Element | null>(null);
  const educationRef = useRef<Element | null>(null);
  const workRef = useRef<Element | null>(null);

  return (
    <>
      <Top aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} />
      <Body aboutRef={aboutRef} educationRef={educationRef} workRef={workRef} />
    </>
  );
}

export default App;
