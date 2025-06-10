const Header = () => {
  return (
    <header className="header">
      <h2>Anastasiia Smakula</h2>
      <div>
        <a href="#about" className="header-link">
          About
        </a>
        <a href="#education" className="header-link">
          School
        </a>
        <a href="#work" className="header-link">
          Work
        </a>
        <a href="mailto:anastasia.smakula@gmail.com" className="action-button">
          Get in touch!
        </a>
      </div>
    </header>
  );
};

export default Header;
