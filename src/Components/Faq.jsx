import { useState } from "react";

const faqs = [
  {
    question: "What are those black streaks on my roof?",
    answer:
      "Those black streaks are algae called Gloeocapsa magma. They reproduce and leave dead cells that build up, forming dark streaks or patches on your roof.",
  },
  {
    question: "Does algae, moss and lichen damage my roof?",
    answer:
      "Yes, algae can reduce your roof’s lifespan by up to 50%. Their root systems degrade the protective surface over time.",
  },
  {
    question: "How do you clean a roof?",
    answer:
      "We apply a special biodegradable solution tailored to your roof, followed by a soft rinse and a protective fungicidal treatment.",
  },
  {
    question:
      "Do I have to be home for the estimate or when the work is carried out?",
    answer:
      "No, we use satellite imagery and call you with the quote and details. You don’t need to be home.",
  },
  {
    question: "What happens if it rains on the scheduled day?",
    answer:
      "We can work in light rain, but will reschedule if heavy rain is expected.",
  },
  {
    question: "How long will the roof cleaning last?",
    answer:
      "It depends on sunlight, roof pitch, tile material, and surrounding roofs. Typically, results last for years with proper maintenance.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative h-60 bg-[url('/images/services-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
          Frequently Asked Questions
        </h1>
      </section>

      {/* Page Layout */}
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-6">
          <div className="bg-slate-400 p-4 rounded text-white font-semibold text-lg">
            Customer Services
          </div>
          <ul className="space-y-3">
            {[
              { text: "Contact Us", href: "/contact" },
              { text: "FAQ", href: "/faq", active: true },
              { text: "Privacy Policy", href: "/privacy" },
            ].map(({ text, href, active }, idx) => (
              <li key={idx}>
                <a
                  href={href}
                  className={`block px-4 py-2 rounded ${
                    active
                      ? "bg-yellow-400 text-white"
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>

          
        </aside>

        {/* FAQ Content */}
        <div className="md:w-3/4 space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-4 bg-slate-100 hover:bg-slate-200 font-semibold"
              >
                {faq.question}
              </button>
              <div
  className={`overflow-hidden transition-all duration-300 ${
    openIndex === idx ? "max-h-96 opacity-100 py-4 px-6" : "max-h-0 opacity-0 px-6"
  } bg-white text-slate-700`}
>
  <div className="transition-opacity duration-300">{faq.answer}</div>
</div>
            </div>
          ))}

          <div className="pt-6 border-t mt-6 text-slate-700">
            Can’t find the answer you’re looking for?{" "}
            <a href="/contact" className="text-blue-600 font-medium underline">
              Get in touch!
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
