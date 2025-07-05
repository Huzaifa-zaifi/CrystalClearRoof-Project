import React from "react";

const RoofRepair = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-60 bg-[url('/images/serviceCards/7.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Roof Repair Services
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        <h2 className="text-xl font-semibold">Roof Repairs as Part of Cleaning Service</h2>
        <p>
          We provide expert roof repairs as part of our comprehensive roof cleaning and restoration service. After the roof is cleaned, we inspect it thoroughly. Any damaged or loose tiles are replaced, and mortar issues on ridges, hips, valleys, and eaves are addressed through re-pointing.
        </p>

        <img
          src="/images/serviceCards/1.jpg"
          alt="Roof Repairs"
          className="w-full max-w-3xl mx-auto rounded-lg shadow"
        />

        <h2 className="text-xl font-semibold">Our Roof Repair Services Include:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Replacing or re-bedding ridge tiles where mortar has degraded</li>
          <li>Replacing cracked or broken tiles</li>
          <li>Re-pointing work on ridges, valleys, and other exposed areas</li>
        </ul>

        <p>
          Our CrystalClearRoof Registered Contractors are trained in both roof cleaning and essential repair services. They use only high-quality products to ensure a lasting finish and structural integrity of your roof.
        </p>

      
        
      </section>
    </main>
  );
};

export default RoofRepair;
