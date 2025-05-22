import { useState, useEffect } from "react";
import Footer from './Footer';
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FaWhatsapp, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // SEO - Update document title and meta description
    document.title = "Contact Us | Stravinci Automotive";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Contact Stravinci Automotive for inquiries about our revolutionary electric vehicle technology. Reach out to our team for collaborations, questions, or support.";
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.href = "https://stravinci.com/contact";
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
      // Add a new document to the "contacts" collection
      
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
      });
      
      // Success - show confirmation and reset form
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error sending message: ", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen relative z-40 flex flex-col mt-[8vh] items-center justify-center bg-zinc-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 copperplate-gothic">Contact Us</h1>
      <p className="text-gray-400 mb-8 text-center max-w-xl copperplate-gothic">
        Have questions or want to collaborate? Reach out to us!
      </p>

      {submitted && (
        <div className="bg-green-600 text-white p-4 mb-4 rounded-lg copperplate-gothic">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="bg-red-600 text-white p-4 mb-4 rounded-lg copperplate-gothic">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-zinc-900 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 copperplate-gothic">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-zinc-800 border border-gray-700 rounded focus:outline-none focus:border-blue-400 copperplate-gothic"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 copperplate-gothic">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-zinc-800 border border-gray-700 rounded focus:outline-none focus:border-blue-400 copperplate-gothic"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 copperplate-gothic">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-zinc-800 border border-gray-700 rounded focus:outline-none focus:border-blue-400 copperplate-gothic"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 copperplate-gothic">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-zinc-800 border border-gray-700 rounded focus:outline-none focus:border-blue-400 copperplate-gothic"
            required
            disabled={loading}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 copperplate-gothic">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-zinc-800 border border-gray-700 rounded focus:outline-none focus:border-blue-400 copperplate-gothic"
            required
            disabled={loading}
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded transition-all copperplate-gothic flex justify-center items-center`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-200 mb-4 copperplate-gothic">Connect with Us</h2>
        <div className="flex gap-6 justify-center">
          <a href="https://whatsapp.com/channel/0029Vb56Tzd7YSdDDS2HHg0X" target="_blank" rel="noopener noreferrer" className="text-green-500 text-3xl hover:scale-110 transition-all">
            <FaWhatsapp />
          </a>
          <a href="https://x.com/Stravincii?t=22LgB1izFu_CLCIZQx8WsQ&s=08" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl hover:scale-110 transition-all">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/stravincii?igsh=ZTBub2xmbjRwN2w1" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:scale-110 transition-all">
            <FaInstagram />
          </a>
          {/* <a href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:scale-110 transition-all">
            <FaLinkedin />
          </a> */}
        </div>
      </div>

     
      {/* <div className="w-full max-w-lg mt-10">
        <iframe
        className="w-full h-64 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.96305761531564!3d-37.81362797975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f37b%3A0xf34288782b4fcb1!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1623678960933!5m2!1sen!2sau"
        allowFullScreen=""
        loading="lazy"
        ></iframe>
        </div> */}
    </div>
    <Footer />
    </>
  );
}

export default Contact;
