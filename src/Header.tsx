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

  return (
    <header className="header">
      <h2>Anastasiia Smakula</h2>
      <div>
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
      </div>
    </header>
  );
};

export default Header;
