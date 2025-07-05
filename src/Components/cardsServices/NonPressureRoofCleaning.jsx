import React from "react";

const NonPressureRoofCleaning = () => {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-60 bg-[url('/images/serviceCards/7.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Non-Pressure Roof Cleaning (Biowash™)
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        <p>
          Our <strong>Biowash™</strong> non-pressure roof cleaning service safely removes moss, algae, lichen, and years of grime using certified techniques that avoid walking on or damaging your roof. It restores your roof’s appearance while protecting its integrity.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* <img
            src="/c/images/2/c9471cweb11-png.jpg"
            alt="Non-Pressure Roof Cleaning"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/1602597dweb12-png.jpg"
            alt="Non-Pressure Roof Cleaning"
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        <h2 className="text-xl font-semibold">Why Choose Biowash™?</h2>
        <p>
          Many homeowners avoid roof cleaning fearing tile damage. Biowash™ provides a safe alternative using low-impact application and rinsing, with no pressure washers needed. It works well on most roof types and addresses moss growth, which can otherwise damage tiles and cause costly repairs.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* <img
            src="/c/images/2/2186e317moss-b-png.jpg"
            alt="Non-Pressure Roof Cleaning"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/3c2e5bc5moss-a-png.jpg"
            alt="Non-Pressure Roof Cleaning"
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        <h2 className="text-xl font-semibold">Avoid Expensive Roof Repairs</h2>
        <p>
          During colder months, moss and moisture contribute to the freeze-thaw cycle, accelerating roof damage. With Biowash™, our certified technicians remove these risks while restoring visual appeal.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* <img
            src="/c/images/2/7198fb8biowash-c-jpg.jpg"
            alt="Non-Pressure Roof Cleaning"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/cb98fbiowash-d-jpg.jpg"
            alt="Non-Pressure Roof Cleaning"
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        <h2 className="text-xl font-semibold">Step-by-Step Biowash™ Process</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Application of Biowash™ Surface Cleaner to kill mould, algae, and loosen grime</li>
          <li>Short wait to allow the solution to penetrate and break down contaminants</li>
          <li>Gentle rinse to flush away loosened material</li>
          <li>Application of Biowash™ Surface Protector to prevent future regrowth</li>
        </ul>

        <div className="flex flex-col md:flex-row gap-6">
          {/* <img
            src="/c/images/2/e540bdbiowash-b-jpg.jpg"
            alt="Biowash Process"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/2746184biowash-a-jpg.jpg"
            alt="Biowash Process"
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        <p>
          Many people think they need a new roof when in fact a professional Biowash™ cleaning can restore it to its original condition at a fraction of the cost.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* <img
            src="/c/images/2/481e0img_2978-jpg.jpg"
            alt="Biowash Results"
            className="w-full md:w-1/2 rounded-lg shadow"
          />
          <img
            src="/c/images/2/237813bdimg_2979-jpg.jpg"
            alt="Biowash Results"
            className="w-full md:w-1/2 rounded-lg shadow"
          /> */}
        </div>

        <h2 className="text-xl font-semibold">Certified Roof Cleaning Contractors</h2>
        <p>
          Our Biowash™ Authorized Agents operate across the UK, providing reliable service backed by Smartseal products. If you're considering roof cleaning, our contractors can offer a <strong>FREE no-obligation quote</strong> and professional advice.
        </p>

        

        <div className="flex gap-4 mt-4">
          <a
            href="/quotation"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-cyan-800"
          >
            Get A Free Quotation
          </a>
         
        </div>
      </section>
    </main>
  );
};

export default NonPressureRoofCleaning;
