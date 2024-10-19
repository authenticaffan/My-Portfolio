import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ThemeToggle from "../components/ThemeToggle"
import DevcolabImg from "../assets/DevColab.png"
import ECommerceImg from "../assets/E-Commerce.png"
import ProfileImg from "../assets/Profile-cropped.jpg"

const HomePage = () => {
  return (
    <>
    <ThemeToggle />

    <Navbar />

    <>

      <div className="banner pt-8 pb-6 mt-4">
        <img src={ProfileImg} alt="Banner" className="bannerImg" />
      </div>

      <div className="title-text mb-20">
        <p className="font-aspekta mb-2 text-xl">Hi, I&apos;m <span className=" text-sky-500 after:bg-sky-500 ">Mohamed Affan</span></p>
        <h1 className="h1 font-aspekta mb-2">I am Embarking on a <span className="inline-flex relative text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">Full-Stack Developer</span> journey.</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400"> MERN | Problem Solver | Eager to Explore Realms of AI & ML | CSE&apos;25</p>
      </div>

      <div className="social">
        <li className="flex flex-wrap gap-10 mt-[37px] text-slate-500 dark:text-slate-400">
          <a href="https://github.com/authenticaffan" className="flex gap-2 items-center hover:scale-125">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_9914_10)"><path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"></path></g>
          <defs><clipPath id="clip0_9914_10"><rect width="24" height="24" fill="white"></rect></clipPath></defs>
          </svg>
          </a>
          <a href="https://twitter.com/authenticaffan" className="flex gap-2 items-center hover:scale-125">
          <svg width="30" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#a)"><path d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z" fill="currentColor"></path></g>
          <defs><clipPath id="a"><path fill="#fff" d="M0 0h24v19.636H0z"></path></clipPath></defs>
          </svg>
          </a>
          <a href="https://www.linkedin.com/in/authenticaffan/" className="flex gap-2 items-center hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" height="30" width="30" version="1.1" id="Capa_1" viewBox="0 0 45.959 45.959" xmlSpace="preserve">
          <g><g><path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489    c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733    C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123    C8.729,6.477,8.416,7.256,7.847,7.811z"></path><path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path><path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711    c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67    C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797    c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473    c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path></g></g>
          </svg>
          </a>
          <a href="https://dhr.wtf/code" className="flex gap-2 items-center hover:scale-125">
          <svg height="30" width="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
          <g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"></path></g></g></g></svg></a><a href="mailto:authenticaffan@gmail.com" className="flex gap-2 items-center hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"></path>
          </svg>
          </a>
        </li>
      </div>
      
      </>

      <div className="flex justify-center mt-20">
      <div className="aboutsec  text-center w-72">
        <h1 className="text-xl font-bold">About Me</h1>
        <p className="mt-4 text-slate-500"> I&apos;m a final-year Computer Science Engineering student with a passion for full stack development, especially the MERN stack (MongoDB, Express.js, React.js, Node.js). Over the course of my studies, I’ve built a solid understanding of HTML, CSS, and JavaScript, which has allowed me to create user-friendly, dynamic web applications. I enjoy the challenge of turning ideas into real, functional solutions.</p>
        <button className="bg-slate-600 pl-6 pr-6 pt-2 pb-2 mt-4 rounded-xl text-white"><a href="/about">More</a></button>
      </div>
      </div>

      <div className="projectsec text-center mt-20">
      <h1 className="mt-4 text-xl font-bold">Projects</h1>
      <div className="project-cards">
      <div className="card">
        <img className="pImg rounded-lg" src={DevcolabImg} alt="DevColab" />
        <div className="pText">
        <h2 className="text-lg text-center mt-4">DevColab</h2>
        <p className="text-center text-slate-500" >A platform empowering developers to connect, collaborate, and innovate.
        Facilitated networking, trend discovery, and content sharing. Built using
        React.js, Express.js, and MongoDB.
        </p>
        </div>
      </div>

      <div className="card">
        <img className="pImg rounded-lg" src={ECommerceImg} alt="DevColab" />
        <div className="pText">
        <h2 className="text-lg text-center mt-4">E-COMMERCE SITE</h2>
        <p className="text-center text-slate-500" >Developed a robust e-commerce platform using MERN stack, Implemented
        responsive design for seamless use across devices, Enhanced site
        performance through efficient database management and API integration.
        </p>
        </div>
      </div>
      </div>
      <button className="bg-slate-600 pl-6 pr-6 pt-2 pb-2 mt-4 rounded-xl text-white"><a href="/projects">More</a></button>
      </div>

    <Footer />
    
    </>
  )
}

export default HomePage