
import './App.css';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './compontents/Home'
import Services from './compontents/Services'
import About from './compontents/About'
import NotFound from './compontents/NotFound';
import Skills from './compontents/Skills'
import Portfolio from './compontents/Portfolio'
import Contact from './compontents/Contact'
import Foter from './Foter';
import Project from './compontents/Project'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />   
        <Route path="services" element={<Services/>} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
     { /*  <Route path="careers" element={<CareersLayout />}>
          <Route 
            index 
            element={<Careers />} 
            loader={careersLoader} 
          />
  
            <Route 
            path=":id" 
            element={<CareersDetails />}
            loader={careersDetailsLoader} 
          />
  
        </Route>*/}
  
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  

  return (
    <div className="App">
    
    <RouterProvider router={router} />
    <div><Foter></Foter></div>
   

      </div>
  );
}

export default App;
