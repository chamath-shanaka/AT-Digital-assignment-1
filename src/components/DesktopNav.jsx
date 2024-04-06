// export default function DesktopNav() {
//   return (
//     <nav className="bg-blueishPurple p-5 text-white sticky top-0 flex justify-between items-center">
//       <span className="">
//         <img src="../img/AT Digital Logo.svg" alt="logo" />
//       </span>
//       <div className="hidden md:flex flex-col md:flex-row items-center">
//         <ul className="flex flex-col md:flex-row">
//           <li className="mb-4 md:ml-6 md:mb-0">SERVICES</li>
//           <li className="mb-4 md:ml-6 md:mb-0">ABOUT US</li>
//           <li className="mb-4 md:ml-6 md:mb-0">CONTACT US</li>
//           <li className="mb-4 md:ml-6 md:mb-0">CAREERS</li>
//         </ul>
//       </div>
//       <div className="md:hidden">
//         <img src="../img/menu icon.svg" alt="menu"/>
//       </div>
//       <div>
//         hello
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";

export default function DesktopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blueishPurple p-5 text-white sticky top-0 flex justify-between items-center">
      <span className="">
        <img src="../img/AT Digital Logo.svg" alt="logo" />
      </span>
      <div className="hidden md:flex flex-col md:flex-row items-center">
        <ul className="flex flex-col md:flex-row">
          <li className="md:ml-6 md:mb-0">SERVICES</li>
          <li className="md:ml-6 md:mb-0">ABOUT US</li>
          <li className="md:ml-6 md:mb-0">CONTACT US</li>
          <li className="md:ml-6 md:mb-0">CAREERS</li>
        </ul>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        <img src="../img/menu icon.svg" alt="menu" />
      </div>

      {/* Hamburger menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col text-tricornBlack font-bold">
          <div className="animate-slideInRight p-5 flex justify-between items-start h-full">
            <div className="flex-col items-center">
              <ul className="flex flex-col md:flex-row">
                <li className="mb-8">HOME</li>
                <li className="mb-8">SERVICES</li>
                <li className="mb-8">ABOUT US</li>
                <li className="mb-8">CONTACT US</li>
                <li className="mb-8">CAREERS</li>
              </ul>
            </div>
            <div className="text-3xl cursor-pointer" onClick={(e) => closeMenu(e)}>
              X
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
