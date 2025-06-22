import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function toggler() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="bg-secondary text-white py-6 uppercase fixed left-0 right-0 top-0 z-10">
        <div className="container flex justify-between ">
          <h1>
            <NavLink to="/" className="text-2xl font-semibold">
              start framework
            </NavLink>
          </h1>
          <ul
            className={`mobile medium transition-all duration-300 ${
              toggle ? "flex md:flex" : "hidden md:flex"
            }`}
          >
            <li>
              <NavLink className="rounded-md py-1 px-2 font-medium" to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md py-1 px-2 font-medium" to="/portfolio">
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md py-1 px-2 font-medium" to="/contact">
                contact
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md py-1 px-2 font-medium" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
          <FaBars className="md:hidden cursor-pointer" onClick={toggler} />
        </div>
      </nav>
    </>
  );
}
