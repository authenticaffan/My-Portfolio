import Navbar from "../components/Navbar"

const Resume = () => {
  return (
    <>
      <Navbar />

      <div className="resume-container mb-12">
        <header>
          <h1>K Mohamed Affan</h1>
          <p>
            <a href="https://mohamedaffan.netlify.app/" target="_blank" rel="noopener noreferrer">mohamedaffan.netlify.app</a> | 
            <a href="mailto:mohamedaffan477@gmail.com"> mohamedaffan477@gmail.com</a> | +91-8940142875
          </p>
        </header>

        <section className="summary">
          <h2>Summary</h2>
          <p>
            Dedicated Cloud/DevOps Engineer focused on building scalable infrastructure, automating workflows, and integrating new technologies to enhance deployment efficiency and system reliability.
          </p>
        </section>

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
          </ul>
        </section>

        <section className="skills">
          <h2>Technical Skills</h2>
          <ul>
            <li><b>Programming & Scripting:</b> Python, JavaScript, Bash</li>
            <li><b>CI/CD & DevOps:</b> Jenkins, GitLab, Docker, Git, GitHub</li>
            <li><b>Cloud Platforms:</b> AWS (VPC, EC2, IAM, S3, RDS, CLI, CloudWatch)</li>
            <li><b>OS & Tools:</b> Linux (Ubuntu), SQL, Postman, HTML/CSS</li>
            <li><b>Soft Skills:</b> Effective Communication, Team Collaboration, Problem-Solving, Adaptability</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div>
            <h3 className="font-bold">Distributed Online Examination System</h3>
            <p>
              Engineered a scalable online examination system using the LAMP stack, handling 100+ concurrent users. Implemented RBAC for secure management, optimized MySQL queries, and integrated automated evaluation. Deployed on Hostinger with secure configuration.
            </p>
          </div><br />
          <div>
            <h3 className="font-bold">VPC with Servers in Private Subnets and NAT</h3>
            <p>
              Designed a production-ready VPC architecture with isolated public/private subnets. Deployed EC2 instances behind NAT Gateway for security and configured route tables, security groups, and Elastic IPs.
            </p>
          </div>
        </section>

        <section className="leadership">
          <h2>Leadership & Responsibilities</h2>
          <ul>
            <li>* Administered & updated the official college website, leading a UI/UX redesign that boosted engagement.</li>
            <li>* Led a web design competition during a technical symposium with over 50 participants.</li>
            <li>* Advanced to the internal hackathon round for a Student Dropout Analysis model.</li>
          </ul>
        </section>

        <section className="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>* DevOps Essentials - Infosys Springboard</li>
            <li>* Docker - KodeKloud</li>
            <li>* Jenkins - KodeKloud</li>
            <li>* GIT - KodeKloud</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Resume
