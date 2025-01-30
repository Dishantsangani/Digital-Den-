// import React, { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";

// function Navbar() {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <nav className="relative bg-white shadow dark:bg-gray-800 z-30">
//         <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
//           <div className="flex items-center justify-between">
//             <p className="w-auto h-2 sm:h-7">
//               <img src="logo.png" className="h-8 z-auto" alt="logo" />
//             </p>

//             {/* Mobile menu button */}
//             <div className="flex lg:hidden">
//               <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
//                 aria-label="toggle menu"
//               >
//                 {isOpen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 8h16M4 16h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu open: "block", Menu closed: "hidden" */}
//           <div
//             className={`${
//               isOpen ? "block" : "hidden"
//             } absolute inset-x-0 z-20 w-full mt-4 px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
//           >
//             <div className="flex flex-col md:flex-row md:mx-6">
//               <Link
//                 className={`my-2  transition-colors duration-300 md:font-semibold transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 ${
//                   location.pathname === "/" ? " text-blue-600" : ""
//                 }`}
//                 to="/"
//               >
//                 Home
//               </Link>

//               <Link
//                 className={`my-2  transition-colors duration-300  md:font-semibold transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 ${
//                   location.pathname == "/about" ? "text-blue-600" : ""
//                 }`}
//                 to="/about"
//               >
//                 About
//               </Link>
//               <Link
//                 className={`my-2  transition-colors duration-300   md:font-semibold transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0  ${
//                   location.pathname === "/contact" ? "text-blue-600" : ""
//                 }`}
//                 to="/contact"
//               >
//                 Contact
//               </Link>
//               <Link
//                 className={`my-2  transition-colors duration-300   md:font-semibold transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0 ${
//                   location.pathname === "/team" ? "text-blue-600" : ""
//                 }`}
//                 to="/team"
//               >
//                 Team
//               </Link>
//             </div>

//             <div className="flex justify-center md:block">
//               <Link
//                 className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 "
//                 // to="/cart"
//               >
//                 <FaCartShopping style={{ width: "25px" }} />
//                 {amount ? (
//                   <span className="absolute bottom-3 left-1 p-1 w-4 text-xs text-white bg-blue-500 rounded-full text-center ">
//                     <span>{amount}</span>
//                   </span>
//                 ) : (
//                   ""
//                 )}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
import React from 'react'

function Navbar() {
  return (
    <div>Navbar</div>
  )
}

export default Navbar