import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="body-holder">
        <div className="body-section" id="about">
          <h2>Hello, I am Anastasiia!</h2>
          <p>
            I'm a Full Stack Web Developer based in Canada, with a background in
            tech, communication, and customer experience. I recently graduated
            from Robertson College's Full Stack Web Development program and am
            excited to start building meaningful digital experiences.
          </p>
        </div>

        <div className="body-section" id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <b>2024-2025</b> Robertson Colege
              <br />
              Full Stack Web Developer
              <br />
              Edmonton, Canada
            </li>
            <li>
              <b>2014-2023</b> Catholic High School of St. Cyril and Methodius
              <br />
              Snina, Slovakia
            </li>
            <li>
              <b>2010-2014</b> Elementary School No.2
              <br />
              Zbarazh, Ukraine
            </li>
          </ul>
        </div>

        <div className="body-section" id="work">
          <h2>Experience</h2>
          <ul>
            <li>
              <b>2023-2025</b> Math - Online Tutor
              <br />
              Online
            </li>
            <li>
              <b>2023-2023</b> TUMI - Sales Asocciate
              <br />
              Vaughan, Canada
            </li>
            <li>
              <b>2019-2023</b> Mini Zoo - Horse Riding Instructor & Activity
              Animator
              <br />
              Snina, Slovakia
            </li>
          </ul>
        </div>

        <div className="body-section contact-section">
          <div className="contact-details">
            {" "}
            <h2>Contact</h2>
            <ul>
              <li>Toronto, Canada</li>
              <li>anastasia.smakula@gmail.com</li>
            </ul>
          </div>
          <img src="./photo2.png" className="body-photo2"></img>
        </div>

        <div className="body-section">
          <h2>Technical Skills</h2>
          <br />
          <h3>Software Skills</h3>
          <ul>
            <li>Microsoft Office, Google Workspace, Microsoft Teams</li>
          </ul>
          <h3>Coding Skills</h3>
          <ul>
            <p>Basic knownledge of:</p>
            <li>HTML, CSS, JS, SQL, React, C#, TypeScript, ASP.NET</li>
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
