import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <Router>

      <Home />
      <SocialIcons />
      <About />
      <Projects />
      <Footer />
    
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
    </Router>
  );
}

export default App;
