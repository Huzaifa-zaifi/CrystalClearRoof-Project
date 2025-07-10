import React from "react";
import { Link } from "react-router-dom";

const RoofRepair = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
     

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8 text-lg leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-yellow-800 mb-2">
            Complete Roof Repair as Part of Roof Care
          </h2>
          <p>
            At <strong>CrystalClearRoofs</strong>, we don’t just clean your roof—we restore and protect it. Our professional roof repair service is often paired with roof cleaning to ensure your tiles and ridges are in top condition after the moss, debris, or algae have been removed.
          </p>
        </div>

        <img
        src="/images/serviceCards/1.jpg"
        alt="Roof Repairs"
        className="w-full h-[350px] object-cover rounded mb-6 shadow"
      />

        <div>
          <h2 className="text-2xl font-semibold text-yellow-800 mt-10 mb-2">
            Our Roof Repair Services Include:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Re-bedding or replacing ridge tiles with cracked or loose mortar</li>
            <li>Replacing broken, slipped, or cracked roof tiles</li>
            <li>Re-pointing work on valleys, hips, and eaves</li>
            <li>Minor structural touch-ups to prevent water ingress</li>
          </ul>
        </div>

        <p>
          Every repair is carried out by our CrystalClearRoofs Registered Contractors using high-quality materials to ensure durability and longevity. We focus on both function and appearance—so your roof looks as good as it performs.
        </p>

        <p>
          Whether you're booking a one-time cleaning or a full roof restoration, our repair service ensures no damage is left untreated—giving you a complete solution in one visit.
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

export default RoofRepair;
