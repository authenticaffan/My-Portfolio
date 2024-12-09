import Navbar from "../components/Navbar"

const Resume = () => {
  return (
    <>

    <Navbar />

    <>
    <div className="resume-container mb-12">
      <header>
        <h1>Mohamed Affan</h1>
        <p>
          <a href="https://mohamedaffan.netlify.app/" target="_blank" rel="noopener noreferrer">mohamedaffan.netlify.app</a> | 
          <a href="mailto:mohamedaffan477@gmail.com"> mohamedaffan477@gmail.com</a> | 8940142875
        </p>
      </header>

      <section className="education">
        <h2>Education</h2>
        <div>
          <h3>C Abdul Hakeem College of Engineering and Technology</h3>
          <p>B.E. Computer Science (2021 - 2025)</p>
          <p>Tamil Nadu, India | GPA: 8.3 / 10.0</p>
        </div><br />
        <div>
          <h3>KH Matric Boys Hr. Sec. School</h3>
          <p>HSC (Grade: 86%) - May 2021</p>
          <p>SSLC (Grade: 77%) - May 2019</p>
        </div>
      </section>

      <section className="links">
        <h2>Links</h2>
        <ul>
          <li><a href="https://github.com/authenticaffan" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://linkedin.com/in/authenticaffan" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/authenticaffan" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <p>Programming Languages:</p>
        <ul>
          <li>HTML, CSS, JavaScript, React.js, Express.js, MongoDB, Java</li>
          <li>Familiar with Web App and Android App Development</li>
        </ul>
      </section>

      <section className="languages">
        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Tamil</li>
          <li>Urdu</li>
        </ul>
      </section>

      <section className="research">
        <h2>Research</h2>
        <p><strong>Crop Yield Prediction Using Bio-Inspired Algorithm</strong></p>
        <p>Worked with Prof. Naseer Ahmed on AI in agriculture, using nature-inspired algorithms to predict crop yields for sustainable farming practices.</p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div>
          <h3 className="font-bold">Devcolab</h3>
          <p>A platform empowering developers to connect, collaborate, and innovate. Built using React.js, Express.js, and MongoDB.</p>
        </div><br />
        <div>
          <h3 className="font-bold">E-Commerce Site</h3>
          <p>Developed a robust e-commerce platform using the MERN stack with responsive design and efficient database management.</p>
        </div><br />
        <div>
          <h3 className="font-bold">AI Sentiment Analysis</h3>
          <p>Created an AI-based sentiment analysis system using machine learning algorithms such as CNNs and SVMs for emotion detection.</p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div>
          <h3 className="font-bold">Focus Career Centre</h3>
          <p>Social Media Manager (Part-Time) | Oct 2022 – Dec 2022 | Tamil Nadu, India</p>
        </div>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <p>Participated in Smart India Hackathon 2023, focusing on “Student Dropout Analysis for School Education”. Selected in an internal hackathon and nominated for further consideration.</p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Neural Network & Deep Learning - GUVI</li>
          <li>Internet of Things - SkillUp</li>
        </ul>
      </section>
    </div>
    </>
    

    </>
  )
}

export default Resume