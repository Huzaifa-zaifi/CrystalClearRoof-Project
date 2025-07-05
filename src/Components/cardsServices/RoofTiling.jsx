import React from "react";

const RoofTiling = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-60 bg-[url('/images/serviceCards/6.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Roof Tile Sealing
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        <p>
          Roof tile sealing is an effective solution to protect your roof from moss, algae, and general wear over time. As roof tiles age, they often become porous, leading to water ingress, heat loss, and moss growth.
        </p>

        {/* <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/c/images/2/a3232web9-png.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/b70046web10-png.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
        </div> */}

        <p>
          Our clear roof sealer, such as Climashield™, offers a breathable barrier that protects the surface without changing the appearance. It is especially effective on concrete tiles and helps reduce energy bills by minimizing heat transfer.
        </p>

        {/* <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/c/images/2/35240astuart-kim-c-png.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/8b89e1stuart-kim-b-png.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
        </div> */}

        <h2 className="text-xl font-semibold">Why Choose Our Roof Sealers?</h2>
        <p>
          Climashield™ sealer is suitable for a variety of surfaces including slate, concrete, clay, and stone. It helps reduce UV fading, resists frost damage, and inhibits moss growth—all while maintaining the roof’s natural look.
        </p>

        {/* <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/c/images/2/74c5380bung-a-png.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/788299babung-b-png.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
        </div> */}

        <p>
          The sealer is applied after deep cleaning and is done using a sprayer, brush, or roller. We ensure gutters are cleared, pipes protected, and the site left tidy. The result is long-lasting protection and enhanced kerb appeal.
        </p>

        <h2 className="text-xl font-semibold">Benefits of Roof Tile Sealing</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Excellent water repellency</li>
          <li>Inhibits moss and algae growth</li>
          <li>Protects against frost damage</li>
          <li>Reduces need for regular maintenance</li>
          <li>Invisible damp protection barrier</li>
          <li>Long-lasting performance</li>
          <li>10-Year Guarantee</li>
        </ul>

        <div className="flex flex-col md:flex-row gap-6">
          {/* <img
            src="/c/images/2/dd1db6rc5-jpg.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/43ab47a2rc6-jpg.jpg"
            alt="Roof Tile Sealing"
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        <p>
          Our network of CrystalClearRoof Registered Contractors ensures you receive expert-level service with professional equipment and trusted products. We serve all areas across the UK.
        </p>

        
      </section>
    </main>
  );
};

export default RoofTiling;
