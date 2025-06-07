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
      <p className="bio">
        I'm passionate about web development and love learning new technologies.
        I enjoy building clean, user-friendly applications and solving problems
        through code.
      </p>
      <div className="social-links">
        <p>
          LI: {""}
          <a
            href="https://www.linkedin.com/in/anastasiia-smakula-310143369/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /anna.sma
          </a>
        </p>
        <p>
          IG: {""}
          <a
            href="https://www.instagram.com/anastasiia.smakula/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @anna.smakula
          </a>
        </p>
      </div>
    </div>
  );
};

export default Top;
