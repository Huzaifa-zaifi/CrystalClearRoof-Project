import React from 'react';
import ServiceLayout from '../components/ServiceLayout';

const CommercialRoofCleaning = () => {
  return (
    <ServiceLayout
      title="Commercial Roof Cleaning"
      description="Professional non-disruptive roof cleaning solutions for commercial properties."
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Trusted Commercial Roof Cleaning Services</h2>
        <p>
          Maintaining the appearance and structural integrity of your commercial property starts from the top. Our professional commercial roof cleaning service helps businesses across the UK eliminate roof moss, algae, grime, and debris buildup without causing damage or disruption.
        </p>

        <img
          src="/images/services/commercial-roof-cleaning-before.jpg"
          alt="Commercial Roof Cleaning Before"
          className="rounded-md shadow-md"
        />
        <img
          src="/images/services/commercial-roof-cleaning-after.jpg"
          alt="Commercial Roof Cleaning After"
          className="rounded-md shadow-md"
        />

        <h2 className="text-2xl font-semibold">Why Commercial Roof Cleaning Matters</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Improves the professional appearance of your building</li>
          <li>Extends the life of roofing materials</li>
          <li>Prevents damage from moss, algae, and moisture buildup</li>
          <li>Reduces long-term repair and maintenance costs</li>
        </ul>

        <h2 className="text-2xl font-semibold">Minimal Disruption, Maximum Results</h2>
        <p>
          We use non-pressure, eco-friendly methods tailored for commercial properties—including schools, offices, warehouses, and more. Our team ensures work is carried out safely and efficiently, often from the ground or scaffold to avoid foot traffic on the roof.
        </p>

        <h2 className="text-2xl font-semibold">Get a Free Online Quote</h2>
        <p>
          Our network of experienced contractors provides nationwide commercial roof cleaning solutions. To request a free quote or more details, please use our{' '}
          <a href="/contact" className="text-cyan-700 underline">online contact form</a>.
        </p>
      </div>
    </ServiceLayout>
  );
};

export default CommercialRoofCleaning;
