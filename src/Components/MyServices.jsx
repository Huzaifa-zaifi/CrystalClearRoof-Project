import { Link } from "react-router-dom";

const MyServices = () => {
  const services = [
    {
      title: "Standard Gutter Cleaning",
      img: "images/serviceCards/11.jpg",
      link: "/standardguttercleaning",
    },
    {
      title: "3 & 4 Storey Gutter Cleaning",
      img: "images/serviceCards/12.jpg",
      link: "/multiguttercleaning",
    },
    {
      title: "Full Wash Service (Gutters, Soffits & Fascias)",
      img: "images/serviceCards/13.jpg",
      link: "/fullwashguttercleaning",
    },
    {
      title: "Roof Cleaning",
      img: "images/serviceCards/2.jpg",
      link: "/roofcleaning",
    },
    {
      title: "Roof Coating",
      img: "/images/serviceCards/5.jpeg",
      link: "/roofcoating",
    },
    {
      title: "Moss Removal",
      img: "/images/c3.jpg",
      link: "/mossremoval",
    },
    {
      title: "Asbestos Roof Coating",
      img: "/images/serviceCards/4.jpg",
      link: "/asbestosroofcoating",
    },
    {
      title: "Roof Moss Prevention",
      img: "/images/serviceCards/6.jpg",
      link: "/roofmossprevention",
    },
    {
      title: "Roof Repair",
      img: "images/serviceCards/1.jpg",
      link: "/roofrepair",
    },
    {
      title: "Roof Tiling",
      img: "images/serviceCards/7.jpg",
      link: "/rooftiling",
    },
    {
      title: "Non-Pressure Cleaning",
      img: "images/serviceCards/8.jpg",
      link: "/non-pressure-cleaning",
    },
    {
      title: "Commercial Roof Services",
      img: "images/serviceCards/9.jpg",
      link: "/commercial-roof-services",
    }
  ];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
       {/* Hero Section */}
    <section
  className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/images/c4.png')",backgroundPosition: "center 40%", }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />
  <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
    Our Services
  </h1>
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
      className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-xl shadow-slate-900/30 transition flex flex-col"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold text-lime-300 mb-2">{item.title}</h3>
      <Link
        to={item.link}
        className="mt-auto inline-block bg-lime-300 hover:bg-lime-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded text-center transition"
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
