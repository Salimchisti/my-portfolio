import React from 'react';


function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-6">
        <li className="hover:underline">
          {/* <Link to="/" className="hover:underline"> */}
            Home
          {/* </Link> */}
        </li>
        <li className="hover:underline">
          {/* <Link to="/about" className="hover:underline"> */}
            About
          {/* </Link> */}
        </li>
        <li className="hover:underline">
          {/* <Link to="/projects" className="hover:underline"> */}
            Projects
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
