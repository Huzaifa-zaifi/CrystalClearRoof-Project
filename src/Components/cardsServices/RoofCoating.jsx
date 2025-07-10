import React from "react";
import { Link } from "react-router-dom";

const RoofCoating = () => {
  return (
    <main className="bg-white text-slate-800 py-12 px-6">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-800 mb-4">Roof Coating</h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Enhance your roof’s durability and appearance with our professional roof coating service. We apply premium protective coatings like Climashield™ that seal, preserve, and renew your roof—while extending its life by up to 10 years.
        </p>
      </section>

      {/* Image + Benefits Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <img
          src="/images/serviceCards/5.jpeg"
          alt="Roof Coating"
          className="rounded-lg shadow-md w-full h-64 object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Why Choose Roof Coating?</h2>
          <ul className="list-disc list-inside text-slate-700 text-base space-y-3">
            <li>Restores original color and improves roof aesthetics</li>
            <li>Protects tiles from harsh weather, UV, and frost damage</li>
            <li>Keeps your roof water-repellent and breathable</li>
            <li>Reduces moss and algae growth</li>
            <li>Improves insulation by reducing moisture penetration</li>
            <li>Backed by a 10-Year Manufacturer Guarantee</li>
          </ul>
        </div>
      </section>

      {/* Additional Info */}
      <section className="max-w-5xl mx-auto mt-12 text-lg text-slate-700 leading-relaxed">
        <p className="mb-6">
          Roof coating is especially useful for older properties or roofs with visible wear but no major damage. By sealing porous surfaces and adding a waterproof membrane, you avoid costly repairs and improve your property's energy efficiency.
        </p>
        <p>
          All our coatings are applied by trained professionals using high-pressure sprayers for even coverage and long-lasting performance.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          to="/quotation"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded shadow transition"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
};

export default RoofCoating;
