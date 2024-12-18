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
        <img className="pImg rounded-lg " src="/assets/Devcolab.png" alt="DevColab" />
        <div className="pText text-center mx-4 mt-8 mb-8">
        <h2 className="text-lg mb-4">DevColab</h2>
        <p className="">A platform empowering developers to connect, collaborate, and innovate.
        Facilitated networking, trend discovery, and content sharing. Built using
        React.js, Express.js, and MongoDB.
        </p>
        <a href="https://github.com/authenticaffan/DevColab"><button className="bg-slate-600 text-white p-2 mt-4 rounded-xl">Click here</button></a>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src="/assets/E-Commerce.png" alt="E-Commerce" />
        <div className="pText text-center mx-4 mt-8 mb-8">
        <h2 className="text-lg mb-4">E-COMMERCE SITE</h2>
        <p className="" >Developed a robust e-commerce platform using MERN stack, Implemented
        responsive design for seamless use across devices, Enhanced site
        performance through efficient database management and API integration.
        </p>
        <a href="https://github.com/authenticaffan/Ecommerce"><button className="bg-slate-600 text-white p-2 mt-4 rounded-xl">Click here</button></a>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src="/assets/AI-Sentiment.png" alt="AI-Sentiment" />
        <div className="pText text-center mx-4 mt-8 mb-8">
        <h2 className="text-lg mb-4">AI - SENTIMENT ANALYSIS</h2>
        <p className=" " >AI - SENTIMENT ANALYSIS
        Developed an AI-based sentiment analysis system using facial analysis to
        discern users sentiments, providing valuable insights for personalized
        interactions and enhancing user experiences. Implemented machine learning
        algorithms such as convolutional neural networks (CNNs), support vector
        machines (SVMs), etc. for accurate emotion detection and analysis.
        </p>
        <a href="https://github.com/authenticaffan/sentiment-analysis"><button className="bg-slate-600 text-white p-2 mt-4 rounded-xl">Click here</button></a>
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