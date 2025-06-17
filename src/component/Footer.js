import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-300 text-center py-4 mt-8 w-full">
    <div className="text-gray-700 text-sm">
      © {new Date().getFullYear()} FoodVilla. All rights reserved.
    </div>
    <div className="mt-2 flex justify-center gap-4">
      <Link to="/about" className="hover:underline">
        About
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
      <Link to="/privacy" className="hover:underline">
        Privacy Policy
      </Link>
    </div>
  </footer>
);

export default Footer;
