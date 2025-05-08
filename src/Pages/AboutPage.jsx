import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ThemeToggle from "../components/ThemeToggle"

const AboutPage = () => {
  return (
    <>

    <ThemeToggle />
    
    <Navbar />

    <div className="aboutPage flex justify-center mx-8">
    <div className="text-center">
      <h1 className="text-xl mt-4 font-bold">About Me</h1>
      <img className="mt-8 mb-4 h-60 aboutImg" src="/assets/Profile-cropped.jpg" alt="Mohamed Affan" />
      <h1 className="text-xl font-bold">Mohamed Affan</h1>
      <p className="mt-4">I’m a passionate and motivated DevOps and Cloud enthusiast currently focused on building my skills in cloud computing, infrastructure automation, and CI/CD pipelines. As a fresher, I'm actively learning tools and technologies like AWS, Docker, Kubernetes, Terraform, and Linux, with the goal of becoming a skilled DevOps Engineer.
<br /><br />
I enjoy understanding how systems work behind the scenes, and I'm eager to contribute to real-world projects where I can apply my knowledge of automation, cloud services, and deployment strategies.
<br /><br />
🔍 Actively seeking entry-level roles such as:
<br /><br />
* DevOps Engineer (Intern/Junior)
* Cloud Engineer (Fresher)
* Site Reliability Engineer (Trainee)
<br /><br />
Let’s connect and explore opportunities together! 🚀
<br /><br />
📩mail: mohamedaffan477@gmail.com.</p>
    </div>
    </div>
    
    <Footer />

    </>
  )
}

export default AboutPage