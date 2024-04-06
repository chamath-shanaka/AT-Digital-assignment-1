
export default function Footer() {
  return (
    <footer className="bg-blueishPurple text-white font-Lato py-8">

      <div className="flex flex-col s1200px:flex-row justify-between px-14 2xl:px-24">
        {/* Logo */}
        <div style={{ maxWidth: "413px" }}>
          <div className="mb-4">
            <img src="../img/AT Digital Logo.svg" alt="log" />
          </div>
          <div>
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
        </div>

        {/* Technologies and services */}
        <div className="flex flex-col md:flex-row md:mt-24 s1200px:mt-0">
          <div className="md:mt-0 mt-20">
            <p className="font-semibold text-xl">Our Technologies</p>
            <ul>
              <li className="my-3">ReactJS</li>
              <li className="my-3">Gatsby</li>
              <li className="my-3">NextJS</li>
              <li className="my-3">NodeJS</li>
            </ul>
          </div>

          <div className="md:pl-28 md:mt-0 mt-20">
            <p className="font-semibold text-xl">Our Services</p>
            <ul>
              <li className="my-3">Social media Marketing</li>
              <li className="my-3">Web & Mobile App Development</li>
              <li className="my-3">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* horizontal divider and lower */}
      <div className="container mx-auto flex flex-col items-center">
        <div className="border-t border-white mb-4 mt-9 md:w-630 w-11/12"></div>
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>

    </footer>
  );
};
