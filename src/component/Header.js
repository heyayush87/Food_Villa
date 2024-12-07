import { useState, useContext } from "react";
import image from "../img/foodvilla.jpeg";
import { Link } from "react-router-dom";

import useLogin from "../utils/useLogin";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Logo = () => (
  <a href="/">
    <img className="h-28 p-3" alt="logo" src={image} />
  </a>
);

const Header = () => {
  const [loggedIn, setloggedIn] = useState(false);

  // subscribing to channel
  const data = useContext(userContext);
  // console.log(data);
  const CartItems = useSelector((store) => store.cart.items);
  // console.log(CartItems);

  return (
    <div className="flex justify-between bg-red-500 shadow-lg ">
      <Logo />
      <div className="navbar">
        <ul className="flex p py-10 mr-10">
          <li className="px-2 mr-10">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-2 mr-10">
            <Link to="/about"> About us </Link>
          </li>
          <li className="px-2 mr-10">
            <Link to="/contact"> Conatct </Link>
          </li>
          <li className="px-2 mr-10">
            <Link to="/cart"> 🛒{CartItems.length}</Link>
          </li>

          <li className="px-2 mr-10">
            <Link to="/grocery"> Grocery</Link>
          </li>

          {loggedIn ? (
            <button
              onClick={() => {
                setloggedIn(false);
              }}
            >
              logout
            </button>
          ) : (
            <button
              onClick={() => {
                setloggedIn(true);
              }}
            >
              login
              <li className="px-4 font-bold">{data.loggedInuser}</li>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
