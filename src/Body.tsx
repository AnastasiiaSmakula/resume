import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="body-holder">
        <div className="body-section">
          <h1>Hello, I am Anastasiia!</h1>
          <p>
            I'm a Full Stack Web Developer based in Canada, with a background in
            tech, communication, and customer experience. I recently graduated
            from Robertson College's Full Stack Web Development program and am
            excited to start building meaningful digital experiences.
          </p>
          <button></button>
        </div>

        <div className="body-section">
          <h2>Education</h2>
          <ul>
            <li>
              2024-2025 Robertson Colege<br></br>Full Stack Web Developer
              <br></br>Edmonton, Canada
            </li>
            <li>
              2014-2023 Catholic High School of St. Cyril and Methodius
              <br></br>Snina, Slovakia
            </li>
            <li>
              2010-2014 Elementary School No.2<br></br>Zbarazh, Ukraine
            </li>
          </ul>
        </div>

        <div className="body-section">
          <h2>Experience</h2>
          <ul>
            <li>
              2023-2023 TUMI - Sales Asocciate<br></br>Vaughan, Canada
            </li>
            <li>
              2019-2023 Mini Zoo - Horse Riding Instructor & Activity Animator
              <br></br>Snina, Slovakia
            </li>
          </ul>
        </div>

        <div className="body-section">
          <img src="./photo2.png" className="body-photo2"></img>
          <h2>Contact</h2>
          <ul>
            <li>Toronto, Canada</li>
            <li>anastasia.smakula@gmail.com</li>
            <li>4168767589</li>
          </ul>
        </div>

        <div className="body-section">
          <h2>Technical Skills</h2>
          <h3>Software Skills</h3>
          <h3>Coding Skills</h3>
          <ul>
            <p>Basic knownledge of:</p>
            <li>HTML CSS JS SQL React C#</li>
          </ul>
        </div>

        <div className="body-section">
          <h2>Language</h2>
          <ul>
            <li>English - Fluent</li>
            <li>Slovak - Fluent</li>
            <li>Ukrainian - Native</li>
            <li>Rusiian - Native</li>
          </ul>
        </div>

        <div className="body-section">
          <h2>Hobbies & Interests</h2>
          <ul>
            <li>Kickboxing, Horse Riding, Sports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
