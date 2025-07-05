import { Link } from "react-router-dom";

const MyServices = () => {
  const services = [
    {
      title: "Roof Cleaning",
      img: "images/serviceCards/2.jpg",
      desc: "Removal of moss, algae, and lichen using safe, professional-grade cleaning solutions.",
      link: "/roofcleaning",
    },
    {
      title: "Roof Coating",
      img: "/images/serviceCards/5.jpeg",
      desc: "Protective coatings to seal and color roofs, improving lifespan and aesthetics.",
      link: "/roofcoating",
    },
    {
      title: "Moss Removal",
      img: "/images/c3.jpg",
      desc: "Careful moss treatment and prevention for long-term roof health.",
      link: "/mossremoval",
    },
    {
      title: "Asbestos Roof Coating",
      img: "/images/serviceCards/4.jpg",
      desc: "Special coating solutions for asbestos roofs, improving durability and safety.",
      link: "/asbestosroofcoating",
    },
    {
      title: "Roof Moss Prevention",
      img: "/images/serviceCards/6.jpg",
      desc: "Chemical-based prevention to keep moss from regrowing after cleaning.",
      link: "/roofmossprevention",
    },
    {
      title: "Roof Repair",
      img: "images/serviceCards/1.jpg",
      desc: "Fixing roof tiles, leaks, and other minor damage before it worsens.",
      link: "/roofrepair",
    },
    {
      title: "Roof Tiling",
      img: "images/serviceCards/7.jpg",
      desc: "Professional roof tile replacement and tiling for all roof types.",
      link: "/rooftiling",
    },
    {
      title: "Non-Pressure Cleaning",
      img: "images/serviceCards/8.jpg",
      desc: "Soft washing method for delicate roof surfaces, safe and effective.",
      link: "/non-pressure-cleaning",
    },
    {
      title: "Commercial Roof Services",
      img: "images/serviceCards/9.jpg",
      desc: "Full-scale commercial roof maintenance and restoration services.",
      link: "/commercial-roof-services",
    }
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-60 bg-[url('/images/services-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">Our Services</h1>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
          Roof Cleaning & Restoration Services
        </h2>
        <p className="text-slate-600 mb-4">
          We provide professional roof cleaning, moss removal, protective coatings and sealing services throughout the UK. With a network of Crystal clear approved contractors, you can trust our high standards and long-lasting results.
        </p>
        <p className="text-slate-600 mb-10">
          Below is a list of our core services we proudly offer:
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">{item.desc}</p>
              <Link
                to={item.link}
                className="mt-auto inline-block bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold px-4 py-2 rounded text-center"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyServices;
