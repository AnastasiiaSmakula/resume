import "./Top.css";
import Header from "./Header";

const Top = () => {
  return (
    <div className="top-container">
      <Header />
      <div className="portfolio-title"></div>
      <div className="body-photo-container">
        <img src="./photo.png" className="body-photo"></img>
        <span className="body-photo-emoji-1"></span>
      </div>
      <img></img>
      <img></img>
      <img></img>
      <p>
        I'm passionate about web development and love learning new technologies.
        I enjoy building clean, user-friendly applications and solving problems
        through code.
      </p>
      <div>
        <p>LI: /hdhhdh</p>
        <p>IG: @ana.nnn</p>
      </div>
    </div>
  );
};

export default Top;
