import { useState, useEffect } from 'react';
import Footer from './Footer';
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FaBolt, FaChartLine, FaHandHoldingUsd } from 'react-icons/fa';

function Investors() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    field: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // SEO - Update document title and meta description
    document.title = "Investors | Stravinci Automotive";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Invest in the future of electric mobility with Stravinci Automotive. Explore investment opportunities in our revolutionary electric vehicle technology and sustainable transportation solutions.";

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = "https://stravinci.com/investors";
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Add a new document to the "investors" collection
      await addDoc(collection(db, "investors"), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        field: formData.field,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
      });

      // Success - show confirmation and reset form
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        contact: "",
        field: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      console.error("Error submitting investor inquiry: ", err);
      setError("Failed to submit inquiry. Please try again later.");
      setIsSubmitted(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='bg-zinc-950 z-40 relative pb-[10vw] md:pt-50 pt-20 text-white px-6 md:px-20 py-12'>


        <div className='mt-[] text-center'>
          <h1 className=' md:text-[7vw] text-4xl bonheur-royale-regular '>Why Invest in Us?</h1>
          <p className='w-[50vw] text-gray-400 copperplate-gothic mx-auto my-[8vw] '>Stravinci Automotive isn&apos;t just another EV startup—it&apos;s a revolution in motion. We are pioneering a new category in the EV industry, offering performance-driven solutions that excite consumers while keeping the planet green. Investing in us means backing innovation that redefines the automotive future</p>
          <div className=' flex flex-col md:flex-row items-center my-[7vw]  justify-center gap-10'>
            <div className='max-w-sm text-center'>
              <FaBolt className='text-6xl text-yellow-400 mx-auto' />
              <h3 className='text-xl font-semibold copperplate-gothic mt-4'>Revolutionary Technology</h3>
              <p className='text-gray-400 copperplate-gothic mt-2'>Pioneering next-gen electric powertrains that redefine high-performance vehicles.</p>
            </div>
            <div className='max-w-sm text-center'>
              <FaChartLine className='text-6xl text-green-400 mx-auto' />
              <h3 className='text-xl copperplate-gothic font-semibold mt-4'>High Market Growth</h3>
              <p className='text-gray-400 copperplate-gothic mt-2'>Positioned in a trillion-dollar industry with rising demand for luxury EVs.</p>
            </div>
            <div className='max-w-sm text-center'>
              <FaHandHoldingUsd className='text-6xl text-blue-400 mx-auto' />
              <h3 className='text-xl copperplate-gothic font-semibold mt-4'>Scalable Investment</h3>
              <p className='text-gray-400 copperplate-gothic mt-2'>Strategic funding options, from early-stage investments to equity partnerships.</p>
            </div>
          </div>
        </div>

        <div className='my-[10vw] text-center'>
          <h2 className='md:text-6xl text-4xl font-bold bonheur-royale-regular'>Market Potential</h2>
          <p className='text-gray-400 mt-6 copperplate-gothic max-w-3xl mx-auto'>The EV market is projected to exceed <span className='text-yellow-400 font-semibold'>$1.1 billion by 2030</span>. With governments and consumers shifting towards sustainable solutions, Stravinci is poised to lead the high-performance EV revolution.</p>
        </div>

        <div className='my-[10vw] text-center'>
          <h2 className='md:text-6xl text-4xl font-bold bonheur-royale-regular'>Investment Opportunities</h2>
          <p className='text-gray-400 copperplate-gothic mt-6 max-w-3xl mx-auto'>We offer exclusive funding and partnership opportunities, including equity stakes, strategic alliances, and R&D collaborations.</p>
        </div>
        <div className='max-w-4xl relative mx-auto bg-zinc-900 p-8 rounded-lg shadow-lg'>
          <h2 className='text-4xl md:text-6xl font-bold bonheur-royale-regular text-center text-blue-400'>Investment Inquiry</h2>
          <p className='text-center copperplate-gothic text-gray-300 mt-2'>Partner with us to revolutionize electric mobility.</p>

          {error && (
            <div className='bg-red-600 text-white p-4 my-4 rounded-lg copperplate-gothic'>
              {error}
            </div>
          )}

          {!isSubmitted ? (
            <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name / Company Name'
                className='w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none copperplate-gothic'
                required
                disabled={loading}
              />
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email ID'
                className='w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none copperplate-gothic'
                required
                disabled={loading}
              />
              <input
                type='text'
                name='contact'
                value={formData.contact}
                onChange={handleChange}
                placeholder='Contact Number'
                className='w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none copperplate-gothic'
                required
                disabled={loading}
              />
              <input
                type='text'
                name='field'
                value={formData.field}
                onChange={handleChange}
                placeholder='Field (e.g., Automotive, Investment, R&D)'
                className='w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none copperplate-gothic'
                required
                disabled={loading}
              />
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Subject'
                className='w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none copperplate-gothic'
                required
                disabled={loading}
              />
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Describe your investment interest'
                rows='4'
                className='w-full px-4 py-2 bg-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none copperplate-gothic'
                required
                disabled={loading}
              ></textarea>

              <button
                type="submit"
                className={`w-full py-3 ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} transition-all duration-300 text-white text-lg rounded-lg shadow-lg copperplate-gothic flex justify-center items-center`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          ) : (
            <div className='text-center mx-auto z-50 my-[5vw] copperplate-gothic bg-zinc-800 p-8 md:p-10 rounded-lg shadow-lg w-full md:w-[50vw]'>
              <h2 className='text-3xl md:text-6xl bonheur-royale-regular text-blue-400 mb-4'>
                Thank You for Your Interest!
              </h2>
              <p className='text-lg md:text-xl text-gray-300'>
                We sincerely appreciate your support and trust in our vision. Your inquiry has been received, and our team will review it shortly.
              </p>
              <p className='mt-4 text-gray-300'>
                At <strong>Stravinci Automotive</strong>, we are committed to revolutionizing electric mobility with cutting-edge technology and innovation. With partners and investors like you, we are one step closer to shaping a future where performance meets sustainability.
              </p>
              <p className='mt-4 text-gray-300'>
                We will reach out to you soon. If you have any immediate questions, feel free to contact us.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Investors;
