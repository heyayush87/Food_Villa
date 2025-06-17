import { useState, useContext } from "react";
import { logo } from "../Constant";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Logo = () => (
  <a href="/">
    <img className="h-20 p-3" alt="logo" src={logo} />
  </a>
);

const Header = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const data = useContext(userContext);
  const CartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-slate-300 shadow-lg">
      <div className="flex justify-between items-center px-4 py-2">
        <Logo />
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">🛒{CartItems.length}</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              {loggedIn ? (
                <button onClick={() => setloggedIn(false)}>logout</button>
              ) : (
                <button onClick={() => setloggedIn(true)}>
                  login
                  <span className="ml-2 font-bold">{data.loggedInuser}</span>
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-200 px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                🛒{CartItems.length}
              </Link>
            </li>
            <li>
              <Link to="/grocery" onClick={() => setMenuOpen(false)}>
                Grocery
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <button
                  onClick={() => {
                    setloggedIn(false);
                    setMenuOpen(false);
                  }}
                >
                  logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setloggedIn(true);
                    setMenuOpen(false);
                  }}
                >
                  login
                  <span className="ml-2 font-bold">{data.loggedInuser}</span>
                </button>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
