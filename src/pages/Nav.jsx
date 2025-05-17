import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cross from "/cross_svg.svg";
import menu from "/menu.svg";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle navigation and scrolling
    const handleNavClick = () => {
        // Close the mobile menu if open
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
        
            <div className='fixed top-0 left-0 w-full bg-zinc-950 z-50 flex items-center justify-between lg:justify-evenly px-6 py-7 text-white bank-gothic'>
                <div className='flex items-center'>
                    <img className='w-16 h-16 rounded-full z-50 fixed' src="./stravinci.jpeg" alt="Stravinci Logo" />
                </div>
                <div className='hidden lg:flex items-center text-2xl space-x-8'>
                    <Link to="/" className='transition-all hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Home</Link>
                    <Link to="/investors" className='transition-all hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Investors</Link>
                    <Link to="/contact" className='transition-all hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Contact Us</Link>
                </div>
            </div>

          
            <div className='lg:hidden fixed top-0 left-0 w-full bg-zinc-950 flex items-center justify-between px-4 py-3 z-50 bank-gothic'>
                <img className='w-14 h-14 rounded-full' src="./stravinci.jpeg" alt="Stravinci Logo" />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                    <img className='w-10 h-10' src={isMenuOpen ? cross : menu} alt="Menu Toggle" />
                </button>
            </div>

            
            <div className={`fixed top-0 left-0 w-full border-2 bank-gothic text-4xl z-50 h-[50vh] bg-zinc-900 flex flex-col items-center justify-center space-y-6 text-white transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5">
                    <img className='w-8 h-8' src={cross} alt="Close Menu" />
                </button>
                <Link to="/" className='hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Home</Link>
                <Link to="/investors" className='hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Investors</Link>
                <Link to="/contact" className='hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Contact Us</Link>
            </div>
        </>
    );
}

export default Nav;
