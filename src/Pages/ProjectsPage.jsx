import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ThemeToggle from "../components/ThemeToggle"

const ProjectsPage = () => {
  return (
    <>
    <ThemeToggle />

    <div>
    <Navbar />
    </div>

    <div>
    <h1 className="text-xl text-center mt-4 mb-8 font-bold">Projects</h1>
    </div>

    <div className="projectPage ">
    <div className="card">
        <img className="pImg rounded-lg" src="/assets/DOES.avif" alt="DOES" />
        <div className="pText text-center mx-4 mt-8 mb-16 ">
        <h2 className="text-lg mb-4">Distributed Online Examination System</h2>
        <p>
        • Engineered a scalable online examination system using the LAMP stack, handling 100+ concurrent
        users.
        <br />• Implemented role-based access control (RBAC) for secure student, teacher and administrator
        management, reducing unauthorized access and Optimized MySQL queries, improving database
        response. 
        • Integrated automated evaluation and real-time monitoring, improving exam grading efficiency.
        <br />• Deployed on Hostinger with a live domain, configuring Apache, DNS settings, and SSL for secure global
        access.
        </p>
        <a href="https://github.com/authenticaffan/Online-Examination-System.git"><button className="bg-slate-600 text-white p-2 mt-4 rounded-xl">Click here</button></a>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src="/assets/vpc.jpg" alt="VPC" />
        <div className="pText text-center mb-16">
        <h2 className="text-lg  mx-4 mt-4 mb-4">VPC with servers in private subnets and NAT</h2>
        <p className=" mx-4" >
        • Designed a production-ready VPC architecture with isolated public/private subnets for a web app.
        <br />• Deployed EC2 instances behind NAT Gateway, ensuring private subnet security while allowing outbound
        traffic.
        <br />• Configured route tables, security groups, and Elastic IPs, enabling secure, scalable access to cloud
services. 
        </p>
        </div>
      </div>

      

      <div className="card">
        <img className="pImg rounded-lg" src="/assets/Image-Generator.png" alt="AI" />
        <div className="pText text-center mx-4 mt-8 mb-8">
        <h2 className="text-lg mb-4">AI Image Generator</h2>
        <p className="" >Developed a simple AI image generator using a model from huggingface, 
        I used huggingface inference API for generating AI images.
        </p>
        <a href="https://github.com/authenticaffan/AI-image-generator"><button className="bg-slate-600 text-white p-2 mt-4 rounded-xl">Click here</button></a>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}

export default ProjectsPage