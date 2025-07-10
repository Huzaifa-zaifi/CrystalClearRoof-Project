import React from "react";
import { Link } from "react-router-dom";

const FullWashService = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen py-12 px-4 max-w-5xl mx-auto">
      {/* Image */}
      <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg mb-6 shadow-md">
        <img
          src="/images/serviceCards/13.jpg"
          alt="Full Wash Service for Gutters, Soffits, and Fascia"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">
        Full Wash Service (Gutters, Soffits & Fascia)
      </h1>

      {/* Content */}
      <div className="space-y-5 text-lg leading-relaxed text-slate-700">
        <p>
          Over time, your home's exterior surfaces can accumulate dirt, mold, algae, and unsightly
          staining that dulls your property’s appearance. Our Full Wash Service offers a
          comprehensive exterior cleaning solution focused on revitalizing your gutters, soffits, and fascia boards.
        </p>
        <p>
          Using soft washing techniques and eco-friendly cleaning agents, we remove all grime, mildew,
          cobwebs, and discoloration to restore that fresh, clean finish—without causing damage to the materials.
        </p>
        <p>
          This service is perfect for homeowners preparing to sell, spruce up their exterior, or simply
          maintain the beauty and value of their property. A clean roofline not only improves curb appeal
          but also extends the life of your guttering system and prevents rot or decay from buildup.
        </p>
        <p>
          Our professional team ensures every surface is treated with care, leaving your property looking
          bright and renewed—all without climbing a ladder yourself.
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
    </main>
  );
};

export default FullWashService;
