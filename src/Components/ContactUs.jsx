const ContactUs = () => {
    return (
      <main className="bg-white text-slate-900 min-h-screen">
        
        {/* Hero Section */}
        <section className="relative h-60 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="bg-black bg-opacity-60 absolute inset-0 z-0" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
            Request a Free Quotation
          </h1>
        </section>
  
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
          
          {/* Sidebar */}
          <aside className="md:w-1/4 space-y-6">
            <div className="bg-slate-400 p-4 rounded text-white font-semibold text-lg">
              Customer Services
            </div>
            <ul className="space-y-3">
              {[
                { text: "Contact Us", href: "/contact", active: true },
                { text: "FAQ", href: "/faq" },
                { text: "Privacy Policy", href: "/privacy" },
              ].map(({ text, href, active }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    className={`block px-4 py-2 rounded ${
                      active
                        ? "bg-yellow-400 text-white"
                        : "bg-slate-100 hover:bg-slate-200"
                    }`}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
              
            <ul className="space-y-2">
    <li className="font-bold">Email: <span className="font-semibold">info@crystalclearroofs.co.uk</span></li>
    
  </ul>
            
          </aside>
  
          {/* Form Section */}
          <div className="flex-1 bg-slate-50 p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-yellow-700 mb-2">Get In Touch</h2>
            <p className="mb-6 text-slate-600">
              Please use the form below for general enquiries. For service quotes, use our{' '}
              <a href="/quotation" className="text-blue-600 underline font-semibold">service quotation form</a>.
            </p>
  
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name*" className="w-full px-4 py-2 border rounded" required />
                <input type="text" name="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded" />
              </div>
  
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="telephone" placeholder="Telephone*" className="w-full px-4 py-2 border rounded" required />
                <select name="how-find" className="w-full px-4 py-2 border rounded">
                  <option>How did you find us?</option>
                  <option>Internet</option>
                  <option>YouTube</option>
                  <option>Social media</option>
                  <option>Recommendation</option>
                  <option>Other</option>
                </select>
              </div>
  
              <div>
                <select name="subject" className="w-full px-4 py-2 border rounded">
                  <option>Subject</option>
                  <option>Feedback</option>
                  <option>Home Owner</option>
                  <option>Commercial</option>
                  <option>Contractor</option>
                  <option>Business Opportunity</option>
                  <option>Quote for DIY Materials</option>
                  <option>Quote from Contractor</option>
                </select>
              </div>
  
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                className="w-full px-4 py-2 border rounded"
              ></textarea>
  
              <div>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  };
  
  export default ContactUs;
  