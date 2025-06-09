import "./Body.css";
import Card from "./Card";
const Body = () => {
  return (
    <div className="body">
      <div className="body-holder">
        <Card title="Hello, I am Anastasiia!" id="about">
          <p>
            I'm a Full Stack Web Developer based in Canada, with a background in
            tech, communication, and customer experience. I recently graduated
            from Robertson College's Full Stack Web Development program and am
            excited to start building meaningful digital experiences.
          </p>
        </Card>

        <Card title="Education" id="education">
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
        </Card>

        <Card title="Experience" id="work">
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
        </Card>

        <Card title="Contact">
          <div className="contact-section">
            <div className="contact-details">
              <ul>
                <li>Toronto, Canada</li>
                <li>anastasia.smakula@gmail.com</li>
              </ul>
            </div>
            <img src="./photo2.png" className="body-photo2"></img>
          </div>
        </Card>

        <Card title="Technical Skills">
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
        </Card>

        <Card title="Language">
          <ul>
            <li>English - Upper Intermediate</li>
            <li>Slovak - Native</li>
            <li>Ukrainian - Native</li>
            <li>Russian - Native</li>
          </ul>
        </Card>

        <Card title="Hobbies & Interests">
          <ul>
            <li>Kickboxing, Horse Riding, Sports</li>
          </ul>
        </Card>

        <Card title="Projects">
          <ul>
            <li>
              <a
                href="https://github.com/AnastasiiaSmakula/resume"
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub - Resume Project
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Body;
