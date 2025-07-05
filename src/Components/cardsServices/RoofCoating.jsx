import React from "react";

const RoofCoating = () => {
  return (
    <main className="bg-white text-slate-800 py-12 px-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Roof Coating</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Our roof coating services involve applying a protective layer over your roof tiles to restore appearance, improve water resistance, and extend roof life. We use advanced, durable coatings like Climashield™ that come with a 10-year guarantee.
        </p>
      </section>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <img src="/images/serviceCards/5.jpeg" alt="Roof Coating" className="rounded shadow" />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Roof Coating</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Improves curb appeal and adds property value</li>
            <li>Restores color and appearance of faded tiles</li>
            <li>Protects from UV damage and moisture</li>
            <li>Reduces heat loss by keeping roof tiles dry</li>
            <li>Flexible and breathable to prevent cracking</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default RoofCoating;
