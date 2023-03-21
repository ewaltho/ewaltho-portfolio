import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Header from './Header'
import ThankYou from './components/ThankYou'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
