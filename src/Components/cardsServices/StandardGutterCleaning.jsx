import React from "react";
import { Link } from "react-router-dom";

const StandardGutterCleaning = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen py-12 px-4 max-w-5xl mx-auto">
      {/* Image */}
      <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg mb-6 shadow-md">
        <img
          src="/images/serviceCards/11.jpg"
          alt="Standard Gutter Cleaning"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">Standard Gutter Cleaning</h1>

      {/* Content */}
      <div className="space-y-5 text-lg leading-relaxed text-slate-700">
        <p>
          Gutter blockages are a common cause of roof and wall damage. Our Standard Gutter Cleaning
          service is tailored for single-storey and residential buildings to eliminate debris like
          leaves, twigs, moss, and silt—keeping your water drainage smooth and uninterrupted.
        </p>
        <p>
          Using high-reach vacuum systems and ladders where necessary, our trained professionals ensure
          your gutters are cleaned safely without mess. We avoid pressure washing, which can damage
          older guttering, and instead focus on gentle but thorough removal techniques.
        </p>
        <p>
          Regular maintenance not only protects your home but can also extend the life of your guttering
          and reduce the chance of costly repairs later. Our cleaning includes visual inspection and
          recommendations, if required.
        </p>
        <p>
          Whether you're preparing for winter or spring rain, we help you maintain your home’s
          structure with affordable, reliable service.
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

export default StandardGutterCleaning;
