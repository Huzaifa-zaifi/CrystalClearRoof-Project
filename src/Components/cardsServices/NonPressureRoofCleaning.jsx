import React from "react";
import { Link } from "react-router-dom";

const NonPressureRoofCleaning = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen py-12 px-4 max-w-5xl mx-auto">
      

      <h1 className="text-3xl font-bold text-yellow-600 mb-6">
        Non-Pressure Roof Cleaning (Biowash™)
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        Our <strong>Biowash™</strong> service is a safe, non-invasive method of cleaning your roof without pressure washing. This method removes moss, algae, grime, and lichen — all without stepping on or damaging your tiles. It's the ideal solution for fragile roofs or customers concerned about tile breakage.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
        Why Choose Biowash™ Over Pressure Washing?
      </h2>
      <p className="mb-6">
        Traditional pressure washing can damage roof tiles or dislodge protective coatings. Biowash™ is designed to be low-impact while still delivering high-quality results. Using certified cleaning agents and no heavy pressure, we restore your roof’s appearance while maintaining its structural integrity.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
        Key Benefits:
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-800">
        <li>Prevents long-term moss and algae regrowth</li>
        <li>Preserves tile lifespan with no mechanical pressure</li>
        <li>Ideal for all types of residential and commercial roofs</li>
        <li>Environmentally conscious and mess-free application</li>
      </ul>

      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
        How the Biowash™ Process Works
      </h2>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-800">
        <li>Application of the Biowash™ Cleaner to break down moss, algae, and dirt</li>
        <li>Short dwell time to allow deep cleaning action</li>
        <li>Gentle rinse (no pressure) to remove loosened debris</li>
        <li>Final surface protector to prevent regrowth for 2–3 years</li>
      </ul>

      <p className="text-lg mb-6">
        Many clients think they need a new roof when in reality, a proper Biowash™ clean can restore it to near-original condition—without the cost or disruption of replacement.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
        CrystalClearRoofs: Reliable & Certified
      </h2>
      <p className="mb-8">
        Our team is trained in Biowash™ cleaning systems and provides service across the UK. If you're looking for a safe, long-lasting roof clean with minimal disruption, we're here to help. Book a <strong>free, no-obligation quote</strong> today and let CrystalClearRoofs give your property a new look.
      </p>

      <div className="text-center mt-8">
        <Link
          to="/quotation"
          className="inline-block bg-yellow-500 text-white font-bold px-6 py-3 rounded hover:bg-yellow-600"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
};

export default NonPressureRoofCleaning;
