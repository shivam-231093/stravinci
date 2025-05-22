import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Investors from './pages/Investors';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './pages/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='w-full relative min-h-screen flex flex-col'>
       <Analytics />
        
        <div className='relative z-10'>
          <Nav />
          <div className='flex-grow'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/investors" element={<Investors />} />
            </Routes>
            <div className='w-full h-[60vh]'></div>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
