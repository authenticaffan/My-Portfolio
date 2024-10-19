import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AboutPage = () => {
  return (
    <>
    
    <Navbar />

    <div className="flex justify-center">
    <div className="w-80 text-center">
      <h1 className="text-xl mt-4">About Me</h1>
      <img className="mt-8 mb-4 h-60 aboutImg" src="src/assets/Profile-cropped.jpg" alt="Mohamed Affan" />
      <h1 className="text-xl font-bold">Mohamed Affan</h1>
      <p className="mt-4">🎓 I&apos;m a final-year Computer Science Engineering student with a passion for full stack development, especially the MERN stack (MongoDB, Express.js, React.js, Node.js). Over the course of my studies, I&apos;ve built a solid understanding of HTML, CSS, and JavaScript, which has allowed me to create user-friendly, dynamic web applications. I enjoy the challenge of turning ideas into real, functional solutions.
      <br /><br />  💻 In addition to web development, I&apos;m genuinely interested in the fields of Artificial Intelligence and Machine Learning. I believe these technologies will play a crucial role in shaping the future, and I&apos;m excited to dive deeper into their potential applications.
      <br /> <br />  🤝 I&apos;m always open to connecting with others in the tech community, sharing ideas, and collaborating on exciting projects. If you&apos;re working on something impactful, let&apos;s connect and see how we can work together.</p>
    </div>
    </div>
    
    <Footer />

    </>
  )
}

export default AboutPage