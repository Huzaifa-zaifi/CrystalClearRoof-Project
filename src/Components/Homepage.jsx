import { Link } from "react-router-dom";

const Homepage = () => (
  <main>

    {/* Hero Section */}
    <section className="relative w-full h-[70vh] overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/s.jpg"
    alt="Roof Background"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Foreground Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
    <div className="bg-gray-900 text-white p-6 max-w-sm rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-2">ROOF CLEANING SERVICES</h2>
      <p className="mb-4">Remove moss from your roof and transform the look of your home</p>
      <Link to="/quotation">
        <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded">
          FIND OUT MORE
        </button>
      </Link>
    </div>
  </div>
</section>


    {/* Info Section */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Card Template */}
          {[{
            img: "/images/c1.jpg", title: "Our Services", text: "Explore our complete range of roof cleaning, coating, and moss removal solutions.", btn: "Services", link: "/services"
          }, {
            img: "/images/c2.jpg", title: "Our 5 Step Process", text: "Learn about our effective and proven 5-step process for roof restoration and protection.", btn: "Find out more", link: "/services"
          }, {
            img: "/images/c3.jpg", title: "Professional Roof Cleaning", text: "Trusted experts using high-quality products to clean and preserve your roof.", btn: "Find out more", link: "/commercialroofcleaning"
          }].map((card, i) => (
            <div key={i} className="bg-slate-800 text-white rounded-2xl shadow-lg p-6 text-center">
              <img src={card.img} alt={card.title} className="w-full h-60 object-cover mb-6 rounded-lg" />
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="mb-5">{card.text}</p>
              <Link to={card.link}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md">
                  {card.btn}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Badges */}
    <section className="bg-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-semibold text-slate-800 text-center">
          {["Free Survey & Quotation", "10 Year Product Guarantee", "Nationwide Service", "Professional and Affordable"].map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* Services Grid */}
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-2">Roof Cleaning & Protective Coating</h2>
        <h3 className="text-xl font-semibold mb-4">Professional Roof Cleaning & Restoration Service</h3>
        <p className="text-gray-700 mb-4">
          We provide quality roof cleaning, coating, and sealing products across the UK.
          Our registered contractors offer peace of mind, delivering high-standard, professional service every time.
        </p>
        <p className="font-semibold mb-2">Benefits:</p>
        <ul className="list-disc list-inside text-left inline-block text-gray-700 mb-6">
          <li>Improves curb appeal</li>
          <li>Extends roof life</li>
          <li>Protects against damage</li>
          <li>Increases property value</li>
        </ul><br />
        <Link to="/aboutus">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded font-semibold">
            About Us
          </button>
        </Link>
      </div>
    </section>

  </main>
);

export default Homepage;
