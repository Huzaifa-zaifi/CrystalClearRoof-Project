import { Link } from "react-router-dom";

const TopBar = () => (
  <div className="bg-slate-900 text-white text-xs md:text-sm px-4 py-2 flex flex-col md:flex-row md:justify-between gap-2">
    <div></div>
    <div className="flex gap-4 justify-center md:justify-end flex-wrap text-center">
      <Link to="/commercialroofcleaning" className="hover:underline">
        COMMERCIAL ROOF CLEANING
      </Link>
      <Link to="/customerservice" className="hover:underline">
        CUSTOMER SERVICES
      </Link>
    </div>
  </div>
);

export default TopBar;
