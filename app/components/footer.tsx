const Footer = () => {
  return (
    <footer className="text-gray-600 body-font relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center brightness-75"
          style={{
            backgroundImage:
              "url('/footer2.jpg'), linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
            backgroundBlendMode: "overlay",
          }}
        ></div>
      </div>
      <div className="max-w-[85%] px-5 mx-auto pt-12 flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap flex-col relative z-30">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="/2BG.png" alt="nature" width={200} />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3 ml-5">
              NAVIGATE
            </h2>
            <nav className="list-none mb-10 cursor-pointer">
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Home
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    About
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Contact
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Products
                  </span>
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3 ml-5">
              PRODUCTS
            </h2>
            <nav className="list-none mb-10 cursor-pointer">
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Healthy Fruits
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Organic Juice
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Fresh Vegetables
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Handmade Spices
                  </span>
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3 ml-5">
              CONNECt
            </h2>
            <nav className="list-none mb-10 cursor-pointer">
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    Phone
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    LinkedIn
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  Facebook
                  </span>
                </a>
              </li>
              <li className="group">
                <a className="flex items-center text-gray-100 hover:text-gray-300 transition-all duration-300">
                  <span className="mr-2 transform translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  Instagram
                  </span>
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-300"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-500 tracking-wide border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Submit
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-2 md:text-left text-center">
              Enter your email to stay tuned!
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-30 border-t border-gray-300">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2024 Prestine-Nature
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target=""
            >
              @OrganicFarm
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
