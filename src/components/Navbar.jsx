
import {
  Navbar as FlowNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";

import { Link, NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <FlowNavbar
  fluid
  rounded
  className="sticky top-0 z-50 bg-white/80! backdrop-blur-xl border-b border-white/30! shadow-sm"
>

      <NavbarBrand as={Link} to="/">
        <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
          <FaBookOpen size={21} />
        </div>

        <span className="text-2xl font-bold text-slate-900">
          Study<span className="text-blue-600">Space</span>
        </span>
      </NavbarBrand>

      <div className="flex md:order-2 gap-2">
        <Link to="/login">
          <Button color="light" className="border-gray-200">
            Login
          </Button>
        </Link>

        <Link to="/register">
          <Button color="blue">
            Get Started
          </Button>
        </Link>

        <NavbarToggle />
      </div>

      
<NavbarCollapse>
  <NavbarLink
    as={Link}
    to="/"
    className="text-gray-600! hover:text-blue-600!"
  >
    Home
  </NavbarLink>

  <NavbarLink
    as={Link}
    to="/explore"
    className="text-gray-600! hover:text-blue-600! "
  >
    Explore Spaces
  </NavbarLink>

  <NavbarLink
    href="/#how-it-works"
    className="text-gray-600! hover:text-blue-600! "
  >
    How It Works
  </NavbarLink>

  <NavbarLink
    href="/#about"
    className="text-gray-600! hover:text-blue-600!"
  >
    About
  </NavbarLink>
</NavbarCollapse>


    </FlowNavbar>
  );
};

export default Navbar;
