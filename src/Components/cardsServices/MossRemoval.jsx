import React from "react";

const MossRemoval = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative h-60 bg-[url('/images/c3.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Roof Moss Removal
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        <div className="space-y-5">
          <p>
            If your roof is covered in moss, our roof moss removal service is the solution. The UK's damp climate makes roofs ideal for moss, algae, and lichen—leading to blocked gutters, added roof weight, tile damage, and costly repairs.
          </p>

          <p>
            We begin with a thorough mechanical clean using specialist tools. After that, we apply Moss Clear Pro biocide—a high-grade treatment that prevents regrowth for up to 3–4 years. It’s safe, green, and effective year-round.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Why Choose Our Contractors?
          </h2>
          <p>
            Smartseal Registered Contractors have a proven track record in roof moss removal. You’ll receive up to 3 free no-obligation quotes from trusted companies local to your area.
          </p>

          <h2 className="text-xl font-semibold mt-6">How We Work</h2>
          <p>
            Our moss removal process includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full roof clean using professional-grade equipment</li>
            <li>Application of biocide with specialist spraying tools</li>
            <li>Protection of gutters and downpipes</li>
            <li>Use of tarpaulins and sheets to cover surrounding areas</li>
            <li>Full clean-up and waste disposal afterward</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            Benefits of Moss Removal
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enhances property appearance and kerb appeal</li>
            <li>Protects the structural integrity of your roof</li>
            <li>Can increase home value and saleability</li>
            <li>Reduces health hazards like bacteria and mold</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            Can I Do It Myself?
          </h2>
          <p>
            Roof moss removal may seem simple but is best left to professionals. Working at height and using powerful tools requires experience and safety knowledge. DIY attempts often do more harm than good.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            How Long Will It Take?
          </h2>
          <p>
            Duration depends on roof size and moss severity. A bungalow with light grime may take a few hours, while a large, moss-covered home may take longer. Our contractors ensure quality work with minimal disruption.
          </p>

          {/* <h2 className="text-xl font-semibold mt-6">
            Book a FREE Quote Today
          </h2> */}
          
        </div>
      </section>
    </main>
  );
};

export default MossRemoval;
