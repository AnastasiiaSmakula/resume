const Header = () => {
  return (
    <header className="header">
      <h2>Anastasiia Smakula</h2>
      <div>
        <a href="#about">About</a>
        <a href="#education">School</a>
        <a href="#work">Work</a>
        <a href="mailto:anastasia.smakula@gmail.com" className="action-button">
          <button>Get in touch!</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
