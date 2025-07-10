import React from "react";
import { Link } from "react-router-dom";

const MossRemoval = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen py-12 px-6">
      {/* Heading */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-800 mb-4">Roof Moss Removal</h1>
        <p className="text-slate-700 max-w-3xl mx-auto text-lg">
          Safely remove moss from your roof and prevent long-term structural damage using our trusted roof moss removal service across the UK.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto space-y-8 text-slate-800 text-lg leading-relaxed">
        <p>
          The UK's damp climate encourages moss, algae, and lichen growth on roofs. These invaders can cause blocked gutters, tile damage, and added roof weight—leading to expensive repairs if left untreated.
        </p>

        <p>
          Our removal process starts with a deep mechanical clean using professional-grade tools. Then, we apply <strong>Moss Clear Pro</strong>—a high-performance biocide that prevents regrowth for 3 to 4 years. It's eco-friendly, safe, and highly effective.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-yellow-600">Why Choose Us?</h2>
        <p>
          Our Smartseal Registered Contractors have a proven track record in professional roof care. We connect you with up to 3 trusted local companies offering free, no-obligation quotes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-yellow-600">Our Process Includes:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full mechanical roof cleaning using specialist tools</li>
          <li>Application of biocide with precision spraying equipment</li>
          <li>Gutter and downpipe protection during treatment</li>
          <li>Use of tarpaulins to safeguard surrounding areas</li>
          <li>Full clean-up and responsible waste disposal</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-yellow-600">Key Benefits of Moss Removal</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improves the appearance of your roof and home</li>
          <li>Helps prevent structural damage to roof tiles</li>
          <li>Increases your property value and sale appeal</li>
          <li>Reduces health risks from mold and bacteria buildup</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-yellow-600">Should I Do It Myself?</h2>
        <p>
          DIY moss removal is not recommended. The process involves working at height, handling strong chemicals, and using specialized equipment. Incorrect methods may damage your roof or compromise safety.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-yellow-600">How Long Does It Take?</h2>
        <p>
          Timelines depend on roof size and moss severity. A smaller property may take 2–3 hours, while larger or heavily affected roofs may take a day. We prioritize quality and minimal disruption.
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

export default MossRemoval;
