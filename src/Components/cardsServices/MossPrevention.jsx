import React from "react";

const MossPrevention = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative h-60 bg-[url('/images/serviceCards/6.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Roof Moss Prevention Treatment
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        <div className="space-y-4">
          <p>
            Moss on roofs is not just unsightly—it causes blocked gutters, adds
            weight to roof structures, and may lead to broken tiles during
            winter. Moss Clear Pro biocide is used to prevent regrowth after a
            professional roof clean, remaining active for 3–4 years.
          </p>
          {/* <img
            src="/images/custom/moss-left1.jpg"
            alt="Roof Moss Prevention"
            className="rounded-lg mx-auto"
          /> */}
          <p>
            We deep clean your roof using specialist equipment, then spray a
            safe, high-grade biocide to inhibit moss, algae, and lichen
            regrowth. Gutters are cleared, and areas are covered for protection.
          </p>
          <h2 className="text-xl font-semibold mt-6">
            Why Choose Our Contractors?
          </h2>
          <p>
            Our Smartseal Registered Contractors are experienced in roof
            cleaning and moss prevention services. We offer competitive
            no-obligation quotes from up to 3 professionals in your area.
          </p>
          <h2 className="text-xl font-semibold mt-6">
            Benefits of Moss Prevention
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improves the appearance of your roof</li>
            <li>Increases curb appeal and home value</li>
            <li>Extends your roof’s lifespan</li>
            <li>Prevents damage from freeze-thaw cycles</li>
          </ul>
          {/* <img
            src="/images/custom/moss-right2.jpg"
            alt="Roof Moss Prevention Result"
            className="rounded-lg mx-auto"
          /> */}
          <h2 className="text-xl font-semibold mt-6">Leave It to Experts</h2>
          <p>
            Roof moss prevention requires safety, precision, and experience.
            DIY attempts often cause damage. Our contractors use professional
            equipment to complete the job with minimal disruption.
          </p>
          <p>
            To request a free quote, 
            or{" "} any help {" "}
            <a className="text-blue-600 font-medium" href="/contact">
              contact us online
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default MossPrevention;
