import React from "react";
import { Link } from "react-router-dom";

const AsbestosRoofCoating = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
    

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8 text-slate-800 text-lg leading-relaxed">
        <p>
          Asbestos roof coating is a specialized service that requires expertise and strict safety measures. At <strong>CrystalClearRoofs</strong>, we provide safe, effective, and regulation-compliant solutions to encapsulate asbestos and protect your roof for the long term.
        </p>

        <p>
          While asbestos roofs were once praised for their durability, they now pose serious health risks if not maintained properly. Our coating solutions contain these risks without the need for costly replacements—providing peace of mind and long-term protection.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-800">Benefits of Asbestos Roof Coating</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Encapsulates asbestos fibers and prevents their release</li>
          <li>Reduces water ingress through porous tiles</li>
          <li>Slows down moss and algae regrowth</li>
          <li>Cost-effective alternative to full roof replacement</li>
          <li>Improves the look and integrity of aging asbestos roofs</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-800">CrystalClear Roof Coating Process</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">1. Safe Cleaning</h3>
            <p>
              We avoid pressure washing and instead use a low-pressure application of biodegradable roof cleaning solution to eliminate moss and algae. If buildup is dense, we remove it by hand with PPE, ensuring full compliance with hazardous waste disposal regulations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2. Primer Layer</h3>
            <p>
              Once cleaned, a specialized primer is applied to bond loose fibers and prepare the surface for coating. This ensures a secure, long-lasting protective layer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">3. Protective Coating</h3>
            <p>
              Our final coating is spray-applied and available in a variety of colors. It creates a seamless, waterproof seal that strengthens the roof, improves appearance, and prevents fiber exposure for years to come.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-yellow-800">Why Choose CrystalClearRoofs?</h2>
        <p>
          Our certified professionals are trained to handle asbestos roofing with the utmost care and compliance. From preparation to final finish, we deliver a reliable service with minimal disruption—backed by a guarantee and decades of collective experience.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/quotation"
            className="inline-block bg-yellow-500 text-white font-bold px-6 py-3 rounded hover:bg-yellow-600 transition"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AsbestosRoofCoating;
