import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    howFind: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const data = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      telephone: formData.telephone,
      "how-find": formData.howFind,
      subject: formData.subject,
      message: formData.message,
      _captcha: "false",
    });

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@crystalclearroofs.co.uk", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          telephone: "",
          howFind: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
    }
  };

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section
  className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/images/contact.png')",backgroundPosition: "center 30%", }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />
  <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
    Get in touch with us
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
                    active ? "bg-yellow-400 text-white" : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-2">
            <li className="font-bold">
              Email: <span className="font-semibold">info@crystalclearroofs.co.uk</span>
            </li>
          </ul>
        </aside>

        {/* Form Section */}
        <div className="flex-1 bg-slate-50 p-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-yellow-700 mb-2">Get In Touch</h2>
          <p className="mb-6 text-slate-600">
            Please use the form below for general enquiries. For service quotes, use our{" "}
            <a href="/quotation" className="text-blue-600 underline font-semibold">
              service quotation form
            </a>.
          </p>

          {status === "success" && (
            <div className="bg-green-100 text-green-800 border border-green-300 rounded p-4 mb-4">
              ✅ Your message has been sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-100 text-red-800 border border-red-300 rounded p-4 mb-4">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="telephone"
                placeholder="Telephone*"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <select
                name="howFind"
                value={formData.howFind}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">How did you find us?</option>
                <option>Internet</option>
                <option>YouTube</option>
                <option>Social media</option>
                <option>Recommendation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">Subject</option>
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
              value={formData.message}
              onChange={handleChange}
              required
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
