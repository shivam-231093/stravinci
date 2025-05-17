import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import ScrollToTop from './components/ScrollToTop';
import Footer from './pages/Footer';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const Investors = lazy(() => import('./pages/Investors'));
const Contact = lazy(() => import('./pages/Contact'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

// Loading component
const LoadingFallback = () => (
  <div className='w-full h-screen flex items-center justify-center bg-zinc-950 text-white'>
    <div className='text-center'>
      <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4'></div>
      <p className='copperplate-gothic'>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='w-full relative min-h-screen flex flex-col'>
        <div className='relative z-10'>
          <Nav />
          <div className='flex-grow'>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
              </Routes>
            </Suspense>
            <div className='w-full h-[60vh]'></div>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
