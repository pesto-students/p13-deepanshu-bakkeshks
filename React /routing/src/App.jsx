import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <>
   
    
     <Router>   
      <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/blog" element={<BlogPost/>} />
          </Routes>
    </Router>
    </>
  );
}

export default App;
