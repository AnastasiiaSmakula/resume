import { useNightModeContext } from "./NightModeContext";
import "./Header.css";

interface HeaderProps {
  aboutRef: React.RefObject<Element>;
  educationRef: React.RefObject<Element>;
  workRef: React.RefObject<Element>;
}

const Header = (props: HeaderProps) => {
  const scrollToRef = (ref: React.RefObject<Element>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { mode, setMode } = useNightModeContext();

  const toggleMode = () => {
    setMode(!mode);
    localStorage.setItem("mode", mode === true ? "day-mode" : "night-mode");
  };

  return (
    <header className="header">
      <h2>Anastasiia Smakula</h2>
      <div className="header-buttons">
        <button
          onClick={() => scrollToRef(props.aboutRef)}
          className="header-link"
        >
          About
        </button>

        <button
          onClick={() => scrollToRef(props.educationRef)}
          className="header-link"
        >
          School
        </button>

        <button
          onClick={() => scrollToRef(props.workRef)}
          className="header-link"
        >
          Work
        </button>

        <a href="mailto:anastasia.smakula@gmail.com" className="action-button">
          Get in touch!
        </a>

        <button onClick={toggleMode} className="night-mode-button">
          <img
            className="button-image"
            src={mode === true ? "./moon.png" : "./moon-2.png"}
            alt="night mode button"
          />
          {/* {mode ? "Light Mode" : "Night Mode"} */}
        </button>
      </div>
    </header>
  );
};

export default Header;
