import { Link } from "react-router-dom";

const services = [
  {
    name: "Contact Us",
    icon: "📞",
    link: "/contact",
  },
  {
    name: "FAQ",
    icon: "❓",
    link: "/faq",
  },
  {
    name: "Privacy Policy",
    icon: "🔒",
    link: "/privacy",
  },
  {
    name: "Free Quotation",
    icon: "📝",
    link: "/quotation",
  },
];

const CustomerService = () => {
  return (
    <main className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="bg-yellow-500 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Customer Services</h1>
        <p className="mt-2 text-lg">We’re here to help you with anything you need</p>
      </section>

      {/* Service Cards */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ name, icon, link }) => (
          <Link
            to={link}
            key={name}
            className="bg-slate-100 hover:bg-yellow-100 transition-colors text-center p-6 rounded-xl shadow group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className="text-xl font-semibold">{name}</h3>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default CustomerService;
