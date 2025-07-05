const PrivacyPolicy = () => {
    return (
      <main className="bg-white text-slate-900 min-h-screen">
  
        {/* Hero Section */}
        <section className="relative h-60 bg-[url('/images/privacy-hero.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="bg-black bg-opacity-60 absolute inset-0 z-0" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
            Privacy Policy
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
                { text: "Contact Us", href: "/contact" },
                { text: "FAQ", href: "/faq" },
                { text: "Privacy Policy", href: "/privacy", active: true },
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
  
           
          </aside>
  
          {/* Content */}
          <div className="flex-1 bg-slate-50 p-8 rounded-xl shadow space-y-6">
            
  
            <h2 className="text-2xl font-bold text-yellow-700">Privacy Policy</h2>
            <p><strong>Crystal Clear Roofs</strong> respects your privacy. This notice explains how we handle your personal data. “We”, “our”, or “us” refers to Crystal Clear Roofs and all associated brands.</p>
  
            {/* <p><strong>Company Info:</strong> Registered in the UK, company number 6505228. Registered office: 74 Mill Rd, Stock, CM4 9LL.</p> */}
  
            <h3 className="font-semibold text-lg">1. Your Data & Our Commitment</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>We process your data responsibly—whether collected or provided.</li>
              <li>We never sell or misuse your data. Your privacy is a top priority.</li>
              <li>We follow GDPR and UK data laws strictly.</li>
              <li>Full details of your rights are at <a href="https://www.knowyourprivacyrights.org" className="text-blue-600 underline">knowyourprivacyrights.org</a>.</li>
            </ul>
  
            <h3 className="font-semibold text-lg mt-6">2. Information We Collect</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Contact Info:</strong> Name, email, phone, address during order or contact.</li>
              <li><strong>Account Data:</strong> When creating accounts or setting preferences.</li>
              <li><strong>Feedback & Reviews:</strong> Content submitted through forms or reviews.</li>
              <li><strong>Support Data:</strong> Info provided when resolving issues with our team.</li>
              <li><strong>Payment Info:</strong> We do not store card details. All transactions go through secure providers (e.g. SagePay).</li>
              <li><strong>Cookies & Devices:</strong> We track visits, IPs, and device info for analytics and performance improvement.</li>
            </ul>
  
            <h3 className="font-semibold text-lg mt-6">3. How We Use Your Data</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>To process your orders and provide roofing services.</li>
              <li>To personalize your experience on our site.</li>
              <li>To contact you for quotes, feedback, or updates.</li>
              <li>To show your reviews or testimonials (only when permitted).</li>
              <li>To respond to your customer support or complaints effectively.</li>
              <li>To detect and prevent fraud or abuse.</li>
            </ul>
  
            <h3 className="font-semibold text-lg mt-6">4. Data Retention</h3>
            <p>• For quotation requests: info is stored for up to 24 months.<br />
               • For customers: data is retained to support future services.<br />
               • You may request data deletion at any time by written request.</p>
  
            <h3 className="font-semibold text-lg mt-6">5. Security and Confidentiality</h3>
            <p>Your data is never used for unauthorized purposes. We respect your confidentiality and implement secure practices throughout our website and communication.</p>
  
            <p><strong>Effective Date:</strong> 24th May 2018</p>
  
            <a href="/quotation" className="inline-block bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600">
              REQUEST A FREE QUOTE
            </a>
          </div>
        </div>
      </main>
    );
  };
  
  export default PrivacyPolicy;
  