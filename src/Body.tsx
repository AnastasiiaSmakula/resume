import "./Body.css";
import Card from "./Card";
import Timeline from "./Timeline";

interface BodyProps {
  aboutRef: React.RefObject<any>;
  educationRef: React.RefObject<any>;
  workRef: React.RefObject<any>;
}

const Body = (props: BodyProps) => {
  return (
    <div className="body">
      <div className="body-holder">
        <Card title="Hello, I am Anastasiia!" id="about" ref={props.aboutRef}>
          <p>
            I'm a Full Stack Web Developer based in Canada, with a background in
            tech, communication, and customer experience. I recently graduated
            from Robertson College's Full Stack Web Development program and am
            excited to start building meaningful digital experiences.
          </p>
        </Card>

        <Card title="Education" id="education" ref={props.educationRef}>
          <Timeline
            events={[
              {
                date: `2024-2025`,
                shortText: `Full Stack Web Developer`,
                longText: `Edmonton, Canada`,
                longLongText: `An intensive program focused on developing web applications from the ground up to more advanced levels.
                I learned to work with HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, ASP.NET, MongoDB, and Git. I understand the principles of REST APIs, database operations, and deploying applications to servers.
                During the course, I built several fully functional applications as part of my learning process, including small tools like to-do lists and simple interfaces with authentication or interactive components.
                This program helped me build a strong foundation in full stack development and taught me how to write clean, efficient, and maintainable code using modern technologies.`,
              },

              {
                date: `2014-2023`,
                shortText: `Catholic High School of St. Cyril and Methodius`,
                longText: `Snina, Slovakia`,
                longLongText: `Completed general secondary education with a full graduation diploma.
                Graduated with final exams in Slovak language, English, Russian, and Civics. Actively participated in various history and mathematics competitions and academic olympiads, developing strong analytical and critical thinking skills.`,
              },

              {
                date: `2010-2014`,
                shortText: `Elementary School No.2`,
                longText: `Zbarazh, Ukraine`,
                // longLongText: `Built foundational skills in literacy, numeracy, and social development.`,
              },
            ]}
          />
        </Card>

        <Card title="Experience" id="work" ref={props.workRef}>
          <Timeline
            events={[
              {
                date: `2023-2025`,
                shortText: `Math - Online Tutor`,
                longText: `Online`,
                longLongText: `Provided one-on-one and small group online tutoring in mathematics for high school and university students.
                Explained complex mathematical concepts clearly, helped improve problem-solving skills, and prepared students for exams. Used interactive tools and tailored teaching methods to suit individual learning needs.`,
              },

              {
                date: `2022-2022`,
                shortText: `TUMI - Sales Asocciate`,
                longText: `Vaughan, Canada`,
                longLongText: `Provided excellent customer service by assisting clients in selecting products and answering their questions. Maintained store appearance, managed inventory, and processed transactions efficiently. Developed strong communication and sales skills in a fast-paced retail environment.`,
              },

              {
                date: `2019-2022`,
                shortText: `Mini Zoo - Horse Riding Instructor & Activity`,
                longText: `Snina, Slovakia`,
                longLongText: `Provided horse riding lessons and supervised safety for beginners and intermediate riders. Organized outdoor activities and events, ensuring a positive experience for visitors. `,
              },
            ]}
          />
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
            <li>Microsoft Office, Google Workspace, Microsoft Teams, Zoom</li>
          </ul>
          <h3>Coding Skills</h3>
          <ul>
            <p>Basic knownledge of:</p>
            <li>
              {/* <img src="./icons/html-5.png" className="coding-skill-icons" /> */}
              HTML, CSS, JS, Java, SQL, React, C#, TypeScript, ASP.NET, GitHub
            </li>
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
