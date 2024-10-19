import Navbar from "../components/Navbar"
import DevcolabImg from "../assets/DevColab.png"
import ECommerceImg from "../assets/E-Commerce.png"
import AISentimentImg from "../assets/AI-Sentiment.png"

const ProjectsPage = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>

    <div>
    <h1 className="text-xl text-center ">Projects</h1>
    </div>

    <div className="project-cards">
      <div className="card">
        <img className="pImg" src={DevcolabImg} alt="DevColab" />
        <div className="pText rounded-lg">
        <h2 className="text-lg text-center mt-4">DevColab</h2>
        <p className="text-center" >A platform empowering developers to connect, collaborate, and innovate.
        Facilitated networking, trend discovery, and content sharing. Built using
        React.js, Express.js, and MongoDB.
        </p>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src={ECommerceImg} alt="E-Commerce" />
        <div className="pText">
        <h2 className="text-lg text-center mt-4">E-COMMERCE SITE</h2>
        <p className="text-center" >Developed a robust e-commerce platform using MERN stack, Implemented
        responsive design for seamless use across devices, Enhanced site
        performance through efficient database management and API integration.
        </p>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src={AISentimentImg} alt="AI-Sentiment" />
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

    </>
  )
}

export default ProjectsPage