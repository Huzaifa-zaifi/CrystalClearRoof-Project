import { Link } from "react-router-dom";

const RoofCleaning = () => {
  return (
    <main className="bg-white text-slate-800 px-4 py-12">
      {/* <section className="bg-yellow-500 text-white text-center py-10 mb-10">
        <h1 className="text-4xl font-bold">Roof Cleaning Service</h1>
        <p className="mt-4 max-w-3xl mx-auto">
          Professional Roof Cleaning and Moss Removal Solutions Across the UK
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-4">
          <Link to="/quotation" className="bg-white text-yellow-600 px-5 py-2 rounded shadow font-semibold hover:bg-slate-100">
            Get a Free Quotation
          </Link>
          <Link to="/biowash-cleaning-technology" className="bg-blue-700 text-white px-5 py-2 rounded shadow font-semibold hover:bg-blue-800">
            Non Pressure Cleaning
          </Link>
        </div>
      </section> */}

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Professional Roof Cleaning Service Provided Throughout the UK</h2>
          <p className="mt-2 text-justify">
            If your roof is covered in moss, dirt, or grime, our nationwide network of registered roof cleaning contractors can help.
            They offer free quotations across the UK with expert services to safely and affordably clean your roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src="/images/serviceCards/8.jpg" alt="Roof Cleaning" className="rounded shadow" />
          {/* <img src="/c/images/2/213547d3jordan-6-jpg.jpg" alt="Roof Cleaning" className="rounded shadow" /> */}
        </div>

        <div>
          <h2 className="text-2xl font-bold">Roof Cleaning is Fast, Safe, and Affordable</h2>
          <p className="text-justify">
            Moss can damage roof structure, block gutters, and accelerate tile degradation. Our process removes moss safely using
            top-grade cleaning methods without risk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <img src="/c/images/2/a3232web9-png.jpg" alt="Before Cleaning" className="rounded shadow" />
          <img src="/c/images/2/b70046web10-png.jpg" alt="After Cleaning" className="rounded shadow" /> */}
        </div>

        <div>
          <h2 className="text-2xl font-bold">Biowash™ Non-Pressure Roof Cleaning</h2>
          <p className="text-justify">
            BioWash™ technology allows safe, ground-level moss removal without stepping on your roof. It's effective, fast,
            and widely available in the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <img src="/c/images/2/e540bdbiowash-b-jpg.jpg" alt="Biowash" className="rounded shadow" />
          <img src="/c/images/2/2746184biowash-a-jpg.jpg" alt="Biowash Cleaning" className="rounded shadow" /> */}
        </div>

        <div>
          <h2 className="text-2xl font-bold">Improve Roof Lifespan and Property Value</h2>
          <p className="text-justify">
            Clean roofs extend lifespan, prevent structural damage, and boost curb appeal. Our solutions are backed by long-term
            protection guarantees.
          </p>
        </div>

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

export default RoofCleaning;
