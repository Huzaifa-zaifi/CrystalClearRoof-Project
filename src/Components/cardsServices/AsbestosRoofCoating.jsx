import React from "react";
import { Link } from "react-router-dom";
const AsbestosRoofCoating = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-60 bg-[url('/images/serviceCards/4.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Asbestos Roof Coating
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        <p>
          Asbestos roof coating should only be done by qualified professionals due to strict health and safety regulations. It involves applying a protective coating to encapsulate asbestos fibers, preventing their release into the air and extending the roof’s lifespan.
        </p>

        <p>
          Asbestos roofs were common due to their durability and heat resistance, but over time, weathering can release dangerous fibers linked to health issues like lung cancer and mesothelioma. Our coating solutions help contain those risks while saving you from expensive roof replacements.
        </p>

        <h2 className="text-xl font-semibold">Benefits of Asbestos Roof Coating</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Prevents the release of asbestos fibers</li>
          <li>Stops water ingress on porous asbestos tiles</li>
          <li>Slows down moss, lichen, and algae growth</li>
          <li>Cost-effective compared to full roof replacement</li>
          <li>Improves appearance of old asbestos roofs</li>
        </ul>

        <h2 className="text-xl font-semibold">Our Process</h2>

        <h3 className="text-lg font-medium mt-4">Stage 1 – Cleaning</h3>
        <p>
          Pressure washing is avoided. Instead, we apply <strong>Smartseal Green Clear</strong> via low-pressure sprayer to kill moss and algae. If moss is dense, it is removed by hand using proper PPE, and waste is double-bagged and labeled per hazardous waste regulations.
        </p>

        <h3 className="text-lg font-medium mt-4">Stage 2 – Primer Application</h3>
        <p>
          We apply an asbestos coating primer to stabilize loose fibers and ensure maximum adhesion of the final coating. This step is vital to ensure safety and longevity of the treatment.
        </p>

        <h3 className="text-lg font-medium mt-4">Stage 3 – Final Coating</h3>
        <p>
          The final asbestos roof coating is applied using an airless sprayer and comes in various colors. It enhances appearance, increases water resistance, and can add years to the roof’s life.
        </p>

        <h2 className="text-xl font-semibold">Why Choose Us?</h2>
        <p>
          Asbestos coating is a highly specialized task. Our contractors are fully trained to handle asbestos safely and in compliance with UK regulations. With minimal disruption, we help you preserve and protect your roof at a fraction of the replacement cost.
        </p>

        <h2 className="text-xl font-semibold">Request a Free Quote</h2>
        <div className="text-center mt-8">
          <Link
            to="/quotation"
            className="inline-block bg-yellow-500 text-white font-bold px-6 py-3 rounded hover:bg-yellow-600"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AsbestosRoofCoating;
