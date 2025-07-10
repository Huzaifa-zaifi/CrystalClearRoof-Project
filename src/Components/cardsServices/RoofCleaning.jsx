import { Link } from "react-router-dom";

const RoofCleaning = () => {
  return (
    <main className="bg-white text-slate-800 px-4 py-12">
      {/* Hero Section (Optional: You can uncomment and customize later) */}
      {/* 
      <section className="bg-yellow-500 text-white text-center py-10 mb-10">
        <h1 className="text-4xl font-bold">Roof Cleaning Service</h1>
        <p className="mt-4 max-w-3xl mx-auto">
          Professional Roof Cleaning and Moss Removal Solutions Across the UK
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-4">
          <Link to="/quotation" className="bg-white text-yellow-600 px-5 py-2 rounded shadow font-semibold hover:bg-slate-100">
            Get a Free Quotation
          </Link>
          <Link to="/biowash-cleaning-technology" className="bg-blue-700 text-white px-5 py-2 rounded shadow font-semibold hover:bg-blue-800">
            Non Pressure Cleaning
          </Link>
        </div>
      </section>
      */}

      <section className="max-w-5xl mx-auto space-y-12">
        {/* Intro */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-600 mb-2">Professional Roof Cleaning Services Across the UK</h2>
          <p className="text-lg text-slate-700 leading-relaxed text-justify">
            Is your roof affected by moss, algae, or grime? Our trusted network of roof cleaning experts delivers safe and
            affordable roof cleaning throughout the UK. Enjoy peace of mind with free surveys and expert recommendations.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src="/images/serviceCards/8.jpg" alt="Roof Cleaning" className="rounded-lg shadow-md w-full h-64 object-cover" />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">Fast, Safe, and Affordable</h3>
            <p className="text-slate-700 text-justify">
              Roof moss not only looks bad but can block gutters, weaken tiles, and lead to damp problems. Our cleaning removes moss
              and buildup using professional tools without damaging your roof.
            </p>
          </div>
        </div>

        {/* Biowash Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center order-2 sm:order-1">
            <h3 className="text-2xl font-semibold mb-2">Biowash™ Non-Pressure Roof Cleaning</h3>
            <p className="text-slate-700 text-justify">
              Our advanced BioWash™ technology allows us to clean your roof from the ground—no ladders, no pressure washers.
              It’s a gentle, chemical-based treatment that kills moss and keeps it from coming back.
            </p>
          </div>
          {/* Placeholder for Biowash Image - Add when ready */}
          <div className="order-1 sm:order-2">
            <img src="/images/serviceCards/2.jpg" alt="Biowash Roof Cleaning" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>
        </div>

        {/* Lifespan Benefits */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Extend Roof Life & Boost Property Value</h3>
          <p className="text-slate-700 text-justify">
            A clean roof doesn’t just look great—it prevents structural decay, improves insulation, and enhances your home’s
            curb appeal. Our service adds value and longevity to your property, backed by our quality assurance.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/quotation"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded shadow-md transition"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RoofCleaning;
