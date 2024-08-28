"use client";

import { Quicksand, Poppins } from "next/font/google";

//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";
import { LandPlot, Package, Sunrise, Users } from "lucide-react";
import AOSWrapper from "./ui/aos";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

const Hero = () => {

  const [countUp, shouldCountUp] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const Caring = [
    {
      title: "Community Engagement",
      description:
        "We actively engage with our local community through educational workshops, farm tours, and partnerships with local organizations to promote sustainable living and healthy eating.",
    },
    {
      title: "Environmental Responsibility",
      description:
        "We are dedicated to protecting the environment by minimizing waste, using eco-friendly packaging, and implementing energy-efficient practices on our farm.",
    },
    {
      title: "Support for Fair Trade Practices",
      description:
        "Our commitment extends to fair trade practices, ensuring that farmers and workers involved in our supply chain receive fair wages and work in safe conditions.",
    },
    {
      title: "Health and Wellness Focus",
      description:
        "We prioritize your health by providing products free from harmful chemicals and additives. Our goal is to support your wellness journey with nutritious and wholesome food.",
    },
    {
      title: "Charitable Contributions",
      description:
        "A portion of our profits goes to supporting agricultural research and community health initiatives. We believe in giving back and making a positive impact on society.",
    },
    {
      title: "Customer Education and Support",
      description:
        "We provide resources and guidance to help you make informed choices about organic products. Our customer support team is always available to answer your questions and offer personalized advice.",
    },
  ];

  return (
    <>
      <section className="relative mt-12">
      <div className="absolute top-0 bg-orange-100 -up-4 w-full h-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 rounded-full bg-sky-300 -up-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div className="absolute rounded-full bg-green-300 -bottom-24 up-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative flex justify-center items-center">
                    <div className=" rounded-full">
                      <img
                        className="object-fill object-center rounded-full w-96 h-96 shadow-2xl"
                        alt="hero"
                        src="/hero1.jpg"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-once="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${poppins.className} flex flex-col items-start mt-12 mb-16 text-up lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0`}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                Pure, Organic, Prestine.
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Harvesting Purity, Naturally.
              </h1>
              <p className="mb-8 text-base leading-relaxed text-up text-gray-500">
                Experience the richness of nature with our organically grown
                farm products, crafted with care for your well-being.
              </p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="items-center block px-10 py-4 text-base font-medium text-center text-black transition duration-500 ease-in-out transform bg-green-100 shadow-lg rounded-xl hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Shop Now
                  </button>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Explore Benefits
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
