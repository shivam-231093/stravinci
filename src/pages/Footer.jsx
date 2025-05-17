import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to handle scrolling to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black pt-[7vw] fixed text-white bottom-0 h-[60vh] w-full z-0 p-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-5xl md:text-[5vw] font-bold bank-gothic leading-[9vw] tracking-tighter">Stravinci</h2>
          <p className="text-gray-400 copperplate-gothic mt-2">Automotive Engineering the Future of Electric Mobility</p>
        </div>
        
        
        <div className="flex flex-col space-y-2">
          <h3 className="text-md font-semibold copperplate-gothic">Quick Links</h3>
          <Link to="/" className="text-gray-400 copperplate-gothic hover:text-white transition" onClick={handleScrollToTop}>Home</Link>
          <Link to="/investors" className="text-gray-400 hover:text-white copperplate-gothic transition" onClick={handleScrollToTop}>Investors</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition copperplate-gothic" onClick={handleScrollToTop}>Contact us</Link>
        </div>
        
       
        <div>
          <h3 className="text-md copperplate-gothic">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            
            <a href="https://www.instagram.com/stravincii?igsh=ZTBub2xmbjRwN2w1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
            <a href="https://x.com/Stravincii?t=22LgB1izFu_CLCIZQx8WsQ&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaTwitter size={24} /></a>
           
          </div>
        </div>
      </div>
      
  
      <div className="text-center text-gray-500 text-sm mt-10 md:mt-[15vh] border-t border-gray-700 pt-1 copperplate-gothic">
        &copy; {new Date().getFullYear()} Stravinci Automotive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
