"use client";

//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-gray-600 body-font relative z-30">
      <div className="absolute top-0 bg-green-100 -up-4 w-full h-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
        <div className="absolute top-0 rounded-full bg-green-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded shadow-2xl"
            alt="About"
            src="/about.jpeg"
            data-aos="zoom-out"
            data-aos-duration="700"
            data-aos-once="true"
          />
        </div>
        {/* <div className="absolute bottom-1/4 rounded-full bg-green-300 left-3/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div> */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-once="true"
          >
            Nurturing Nature, Cultivating Trust
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
            At PrestineNature, we deliver nature's purest produce with a
            commitment to organic farming and sustainability.
          </p>
          <div className="flex flex-wrap w-full">
            <div
              className="p-2 sm:w-1/2 w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="100"
            >
              <div
                className="bg-green-100 text-gray-900 rounded flex p-4 h-full items-center"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-gray-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Pure Organic Practices
                </span>
              </div>
            </div>
            <div
              className="p-2 sm:w-1/2 w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="300"
            >
              <div className="bg-green-100 text-gray-900 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-gray-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Sustainable Farming
                </span>
              </div>
            </div>
            <div
              className="p-2 sm:w-1/2 w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="400"
            >
              <div className="bg-green-100 text-gray-900 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-gray-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Farm-to-Table Freshness
                </span>
              </div>
            </div>
            <div
              className="p-2 sm:w-1/2 w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="500"
            >
              <div className="bg-green-100 text-gray-900 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-gray-700 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Soil Health Monitoring
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
