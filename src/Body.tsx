import "./Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="body-holder">
        <div className="body-section">
          <h1>Hello, I am Anastasiia!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            incidunt obcaecati sequi repellat et ipsam tenetur aperiam voluptas
            quibusdam temporibus illo eius mollitia est, fugiat ullam! Quibusdam
            blanditiis quisquam nulla.
          </p>
          <button></button>
        </div>

        <div className="body-section">
          <h2>Education</h2>
          <ul>
            <li>2024- Robertson Colege</li>
            <li>2020- High School</li>
            <li>2017 - Secondary School</li>
          </ul>
        </div>

        <div className="body-section">
          <h2>Experience</h2>
          <ul>
            <li>2022 - lalaallala</li>
            <li>2020 - Freelancer (logos, posters, etc.)</li>
          </ul>
        </div>

        <div className="body-section">
          <img></img>
          <h2>Contact</h2>
          <ul>
            <li>Narbonne, France</li>
            <li>nnb1924@gmail.com</li>
            <li>+33 07 82 84 59 00</li>
          </ul>
        </div>

        <div className="body-section">
          <h2>Technical Skills</h2>
          <h3>Software Skills</h3>
          <h3>Coding Skills</h3>
          <ul>
            <li>HTML, CSS, JS, SQL</li>
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
