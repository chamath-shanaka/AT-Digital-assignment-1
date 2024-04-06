export default function DesktopNav() {
  return (
    <nav className="bg-blueishPurple p-5 text-white sticky top-0 flex justify-between items-center">
      <span className="">
        <img src="../img/AT Digital Logo.svg" alt="logo" />
      </span>
      <div className="hidden md:flex flex-col md:flex-row items-center">
        <ul className="flex flex-col md:flex-row">
          <li className="mb-4 md:ml-6 md:mb-0">SERVICES</li>
          <li className="mb-4 md:ml-6 md:mb-0">ABOUT US</li>
          <li className="mb-4 md:ml-6 md:mb-0">CONTACT US</li>
          <li className="mb-4 md:ml-6 md:mb-0">CAREERS</li>
        </ul>
      </div>
      <div className="md:hidden">
        <img src="../img/menu icon.svg" alt="menu"/>
      </div>
    </nav>
  );
}