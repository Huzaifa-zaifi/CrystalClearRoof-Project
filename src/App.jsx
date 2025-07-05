import { Routes, Route } from "react-router-dom";
import TopBar from './Components/Topbar';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import MyServices from './Components/MyServices';
import Quotation from "./Components/Quotation";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Faq from "./Components/Faq";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import CommercialRoofCleaning from "./Components/CommercialRoofCleaning";
import CustomerService from "./Components/CustomerService";
import RoofCleaning from "./Components/cardsServices/RoofCleaning";
import RoofCoating from "./Components/cardsServices/RoofCoating";
import MossPrevention from "./Components/cardsServices/MossPrevention";
import MossRemoval from "./Components/cardsServices/MossRemoval";
import AsbestosRoofCoating from "./Components/cardsServices/AsbestosRoofCoating";
import RoofRepair from "./Components/cardsServices/RoofRepair";
import RoofTiling from "./Components/cardsServices/RoofTiling";
import NonPressureRoofCleaning from "./Components/cardsServices/NonPressureRoofCleaning";

function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Header />
      <Navbar />

      {/* Route-based page rendering */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<MyServices />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/commercialroofcleaning" element={<CommercialRoofCleaning />} />
        <Route path="/customerservice" element={<CustomerService />} />
        <Route path="/roofcleaning" element={<RoofCleaning />} />
        <Route path="/roofcoating" element={<RoofCoating />} />
        <Route path="/roofmossprevention" element={<MossPrevention />} />
        <Route path="/mossremoval" element={<MossRemoval />} />
        <Route path="/asbestosroofcoating" element={<AsbestosRoofCoating />} />
        <Route path="/roofrepair" element={<RoofRepair />} />
        <Route path="/rooftiling" element={<RoofTiling />} />
        <Route path="/non-pressure-cleaning" element={<NonPressureRoofCleaning />} />
        <Route path="/commercial-roof-services" element={<CommercialRoofCleaning />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
