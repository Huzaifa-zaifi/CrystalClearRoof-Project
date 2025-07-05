import { useState } from "react";
import { Link } from "react-router-dom";

const CommercialRoofCleaning = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white text-slate-800 py-12 px-4">
      {/* Hero Section */}
      <section className="bg-yellow-500 py-10 text-center text-white">
        <h1 className="text-4xl font-bold">Commercial Roof Cleaning</h1>
        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <Link
            to="/quotation"
            className="bg-white text-yellow-600 font-semibold px-5 py-2 rounded shadow hover:bg-slate-100"
          >
            Request a Free Quote
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow hover:bg-blue-800"
          >
            Biowash Non-Pressure Roof Cleaning
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Commercial Roof Cleaning</h2>
        <div className="flex justify-center mb-6">
          <img
            src="images/serviceCards/9.jpg"
            alt="Commercial Roof Cleaning"
            className="rounded-md shadow-md w-full max-w-md"
          />
        </div>
        <p className="mb-4">
          Crystal Clear Roofs supply high-quality cleaning and sealing products for roofs.
          Our registered contractors specialise in all aspects of commercial roof cleaning including warehouses,
          industrial units, offices, retail showrooms, schools, shopping centres, university buildings,
          factories plus residential homes, churches, mosques and hospitals.
        </p>
        <p className="mb-4">
          Roof cleaning is advisable if large amounts of moss is present. Moss can cause problems due to
          the extra weight, it also looks unsightly and can contribute to blocking roof gutters creating
          further maintenance problems.
        </p>
        <p className="mb-4">
          Our Commercial Roof Cleaning Service will clear and prevent this damage by moss and algae
          whilst enhancing the aesthetic appearance of your property creating a positive impression
          of your business and premises.
        </p>
        <p className="mb-4">
          Although our roof cleaning process causes minimal disruption we are happy to carry out the work
          in non-business hours. Commercial Roof Cleaning is always best left to the experts due to the
          danger of working at height. We are happy to provide Risk Assessments and Method Statements.
        </p>
        <p className="mb-4">
          For a <strong>FREE No Obligation</strong> quotation please contact us at{' '}
         
          <Link to="/contact" className="text-blue-600 underline font-semibold">online enquiry form</Link>.
        </p>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative w-full max-w-3xl mx-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/c9quCjQzSyg?autoplay=1"
                title="BioWash Demo"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-white text-black hover:bg-gray-200 rounded-full px-3 py-1 font-bold text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CommercialRoofCleaning;
