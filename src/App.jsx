import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    
      
    </>
  )
}

export default App;
