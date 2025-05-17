import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineClose } from "react-icons/md";
import { RiMenu5Fill } from "react-icons/ri";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle navigation and scrolling
    const handleNavClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Desktop Navbar */}
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

            {/* Mobile Top Bar */}
            <div className='lg:hidden fixed top-0 left-0 w-full bg-zinc-950 flex items-center justify-between px-4 py-3 z-50 bank-gothic'>
                <img className='w-14 h-14 rounded-full' src="./stravinci.jpeg" alt="Stravinci Logo" />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none" aria-label="Toggle menu">
                    {isMenuOpen ? <MdOutlineClose  className='text-white' /> : <RiMenu5Fill size={28} className='text-white' />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 right-0 h-screen w-[70vw] sm:w-[40vw] lg:w-[20vw] bg-zinc-900 z-50 text-white text-4xl bank-gothic flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5" aria-label="Close menu">
                    <MdOutlineClose size={28} />
                </button>
                <Link to="/" className='hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Home</Link>
                <Link to="/investors" className='hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Investors</Link>
                <Link to="/contact" className='hover:text-blue-400 copperplate-gothic' onClick={handleNavClick}>Contact Us</Link>
            </div>
        </>
    );
}

export default Nav;
