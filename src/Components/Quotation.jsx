import { useState } from "react";

const Quotation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    postcode: "",
    address: "",
    service_type: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const submission = {
      ...formData,
      created_at: new Date().toISOString(), // Optional but useful
    };

    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/8138cd99-9d55-40ea-81ca-d02a41d1bb82",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission),
        }
      );

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          telephone: "",
          postcode: "",
          address: "",
          service_type: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
    }
  };

  return (
    <>
    {/* Hero Section */}
    <section
  className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/images/c2.jpg')",backgroundPosition: "center 40%", }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />
  <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-yellow-400">
    Request a Free Quotation
  </h1>
</section>


    <main className="min-h-screen bg-white text-slate-900 py-12 px-4 max-w-3xl mx-auto">
      {/* <h1 className="text-3xl font-bold text-yellow-600 mb-6">Request a Quotation</h1> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Phone*"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          placeholder="Postcode"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full px-4 py-2 border rounded"
        />
        <select
          name="service_type"
          value={formData.service_type}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        >
          <option value="">Select Service Type</option>
          <option value="Standard Gutter Cleaning">Standard Gutter Cleaning</option>
          <option value="3 & 4 Storey Gutter Cleaning">3 & 4 Storey Gutter Cleaning</option>
          <option value="Full Wash Service (Gutters, Soffits & Fascias)">Full Wash Service (Gutters, Soffits & Fascias)</option>
          <option value="Roof Cleaning">Roof Cleaning</option>
          <option value="Roof Coating">Roof Coating</option>
          <option value="Moss Removal">Moss Removal</option>
          <option value="Asbetos Roof Coating">Asbetos Roof Coating</option>
          <option value="Roof Moss Prevention">Roof Moss Prevention</option>
          <option value="Roof Repair">Roof Repair</option>
          <option value="Roof Tiling">Roof Tiling</option>
          <option value="Non Pressure Cleaning">Non Pressure Cleaning</option>
          <option value="Commercial Roof Services">Commercial Roof Services</option>
          <option value="Other">Others ( if any please specify in message box )</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          className="w-full px-4 py-2 border rounded"
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded"
        >
          Submit
        </button>

        {status === "success" && (
          <p className="text-green-600 font-semibold mt-4">
            ✅ Form submitted successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-semibold mt-4">
            ❌ Submission failed. Please try again.
          </p>
        )}
      </form>
    </main>
    </>
  );
};

export default Quotation;
