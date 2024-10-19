import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const ProjectsPage = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>

    <div>
    <h1 className="text-xl text-center mt-4 ">Projects</h1>
    </div>

    <div className="project-cards">
      <div className="card">
        <img className="pImg" src="/assets/Devcolab.png" alt="DevColab" />
        <div className="pText rounded-lg">
        <h2 className="text-lg text-center mt-4">DevColab</h2>
        <p className="text-center" >A platform empowering developers to connect, collaborate, and innovate.
        Facilitated networking, trend discovery, and content sharing. Built using
        React.js, Express.js, and MongoDB.
        </p>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src="/assets/E-Commerce.png" alt="E-Commerce" />
        <div className="pText">
        <h2 className="text-lg text-center mt-4">E-COMMERCE SITE</h2>
        <p className="text-center" >Developed a robust e-commerce platform using MERN stack, Implemented
        responsive design for seamless use across devices, Enhanced site
        performance through efficient database management and API integration.
        </p>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src="/assets/AI-Sentiment.png" alt="AI-Sentiment" />
        <div className="pText">
        <h2 className="text-lg text-center mt-4">AI - SENTIMENT ANALYSIS</h2>
        <p className="text-center" >AI - SENTIMENT ANALYSIS
        Developed an AI-based sentiment analysis system using facial analysis to
        discern users sentiments, providing valuable insights for personalized
        interactions and enhancing user experiences. Implemented machine learning
        algorithms such as convolutional neural networks (CNNs), support vector
        machines (SVMs), etc. for accurate emotion detection and analysis.
        </p>
        </div>
      </div>
    </div>

    <Footer />

    </>
  )
}

export default ProjectsPage