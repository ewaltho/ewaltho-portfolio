import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Header from './Header'
import Footer from './components/Footer'
import Streamosaurus from './components/Streamosaurus'
import Wildthorn from './components/Wildthorn'
import Cattention from './components/Cattention'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path='/streamosaurus' element={<Streamosaurus/>} />
            <Route path='/wildthorn' element={<Wildthorn/>} />
            <Route path='/cattention' element={<Cattention/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
