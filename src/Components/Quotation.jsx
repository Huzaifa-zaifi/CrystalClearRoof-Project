const Quotation = () => {
    return (
      <main className="bg-white text-slate-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-60 bg-[url('/images/services-hero.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="bg-black bg-opacity-60 absolute inset-0 z-0" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">Get a Free Quotation</h1>
        </section>
  
        {/* Form Section */}
        <section className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-6">Request Your Free Quotation</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg">
  
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Telephone"
              className="border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Full Width Address */}
            <input
              type="text"
              placeholder="Address"
              className="col-span-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Post Code"
              className="border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Dropdown */}
            <select
              className="col-span-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option disabled value="">
                Select a Service
              </option>
              <option>Roof Cleaning</option>
              <option>Roof Coating</option>
              <option>Moss Removal</option>
              <option>Asbestos Roof Coating</option>
              <option>Roof Moss Prevention</option>
              <option>Roof Repair</option>
              <option>Roof Tiling</option>
              <option>Non-Pressure Cleaning</option>
              <option>Commercial Roof Services</option>
            </select>
  
            {/* Message */}
            <textarea
              rows="4"
              placeholder="Message"
              className="col-span-full border border-gray-300 p-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
  
            {/* Submit */}
            <button
              type="submit"
              className="col-span-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </section>
      </main>
    );
  };
  
  export default Quotation;
  