import React from "react";
import { Link } from "react-router-dom";

const TwoThreeStoreyGutterCleaning = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen py-12 px-4 max-w-5xl mx-auto">
      {/* Image */}
      <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg mb-6 shadow-md">
        <img
          src="/images/serviceCards/12.jpg"
          alt="3 and 4 Storey Gutter Cleaning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">3 and 4 Storey Gutter Cleaning</h1>

      {/* Content */}
      <div className="space-y-5 text-lg leading-relaxed text-slate-700">
        <p>
          Cleaning gutters on 3 and 4 storey buildings presents unique challenges. Our specialist
          team is equipped with advanced high-reach vacuum systems and carbon fiber poles that allow
          us to clean gutters safely—without the need for scaffolding or risky ladders.
        </p>
        <p>
          This service is ideal for apartment complexes, townhouses, and commercial units. We remove
          moss, leaves, silt, and blockages efficiently, ensuring proper water drainage and preventing
          leaks, staining, and structural damage.
        </p>
        <p>
          Our team performs all work from the ground level with camera inspection tools, giving you
          peace of mind and full visibility of your gutter's condition before and after the service.
        </p>
        <p>
          By choosing Crystal Clear Roofs, you’re opting for a safe, affordable, and modern solution
          for your tall property’s gutter maintenance.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <Link
          to="/quotation"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded shadow-md transition"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
};

export default TwoThreeStoreyGutterCleaning;
