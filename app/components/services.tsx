"use client";
import {
  ArrowRight,
  icons,
  ShoppingCart,
  Heart,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

import { Card, CardContent } from "@/components/ui/card";
import { LandPlot, Package, Sunrise, Users } from "lucide-react";
import AOSWrapper from "./ui/aos";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Services = () => {
  const [countUp, shouldCountUp] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  const Icon = ({
    name,
    color,
    size,
  }: {
    name: string;
    color: string;
    size: number;
  }) => {
    //@ts-ignore
    const LucideIcon = icons[name]; // Convert the name to lowercase for consistency

    if (!LucideIcon) {
      console.error(`Icon "${name}" not found!`);
      return null; // Return null if the icon is not found
    }

    return <LucideIcon color={color} size={size} />;
  };

  const Content = [
    {
      title: "Fresh Harvest",
      description:
        "Delivering farm-fresh produce straight from our fields to your doorstep.",
      icon: "Leaf",
    },
    {
      title: "Organic Dairy",
      description:
        "Pure, wholesome dairy products from our happy, grass-fed cows.",
      icon: "Milk",
    },
    {
      title: "Sustainable Packaging",
      description:
        "Eco-friendly packaging that cares for your health and the planet.",
      icon: "Package",
    },
    {
      title: "Farm-to-Table",
      description:
        "Bringing the freshest, seasonal produce directly to your kitchen.",
      icon: "ShoppingBasket",
    },
    {
      title: "Heritage Grains",
      description: "Nutritious, non-GMO grains grown with care and tradition.",
      icon: "Wheat",
    },
    {
      title: "Free-Range Poultry",
      description: "High-quality poultry raised with freedom and care.",
      icon: "Egg",
    },
  ];

  const Products = [
    {
      title: "Organic Vegetables",
      description: "Fresh, farm-grown vegetables delivered to your doorstep.",
      image: "/avogado.jpg",
      discount: "30% OFF",
      price: "$19.99",
      icon: "ShoppingBag",
    },
    {
      title: "Free-Range Eggs",
      description: "High-quality eggs from happy, free-range chickens.",
      image: "/eggs.jpg",
      discount: "20% OFF",
      price: "$12.99",
      icon: "ShoppingBag",
    },
    {
      title: "Artisan Bread",
      description: "Handcrafted bread made with organic ingredients.",
      image: "/bread.jpg",
      discount: "25% OFF",
      price: "$9.99",
      icon: "ShoppingBag",
    },
    {
      title: "Local Honey",
      description: "Raw, unfiltered honey from local, ethical beekeepers.",
      image: "/honey.jpg",
      discount: "15% OFF",
      price: "$14.99",
      icon: "ShoppingBag",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute top-0 bg-teal-100 -up-4 w-full h-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              OUR SERVICES
            </h2>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              What We Offer
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Content.map((elem, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div
                  className="flex rounded-lg h-full bg-transparent p-8 flex-col shadow-lg cursor-pointer transition-transform duration-200 transform hover:scale-125"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                      <Icon name={elem.icon} color={"white"} size={32} />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {elem.title}
                    </h2>
                  </div>
                  <div className="flex-grow text-gray-700">
                    <p className="leading-relaxed text-base">
                      {elem.description}
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font z-50 w-full mx-auto flex items-center justify-center relative">
        <div className="absolute top-0 bg-sky-100 -up-4 w-full h-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl text-center">
                Our Milestones of Excellence
              </h1>
              <p className="mb-8 text-base leading-relaxed text-center text-gray-500 w-3/4 mx-auto">
                Celebrate our journey of growth and success with us. From
                helping countless clients to managing acres of sustainable
                farmland, these numbers tell the story of our dedication and
                impact.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center w-full">
              <div
                className="p-4 md:w-1/4 sm:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={"400"}
              >
                <div className=" px-4 py-6 rounded-lg shadow-lg">
                  <Users className="h-14 w-14 mx-auto text-indigo-500" />
                  {/* @ts-ignore */}
                  <ScrollTrigger onEnter={() => shouldCountUp(true)}>
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      {countUp && <CountUp end={25} duration={2} delay={0.5} />}
                      +
                    </h2>
                  </ScrollTrigger>
                  <p className="leading-relaxed">Clients Helped</p>
                </div>
              </div>
              <div
                className="p-4 md:w-1/4 sm:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={"500"}
                data-aos-once="true"
              >
                <div className=" px-4 py-6 rounded-lg shadow-xl">
                  <Package className="h-14 w-14 mx-auto text-indigo-500" />
                  {/* @ts-ignore */}
                  <ScrollTrigger onEnter={() => shouldCountUp(true)}>
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      {countUp && (
                        <CountUp end={100} duration={4} delay={0.5} />
                      )}
                      %
                    </h2>
                  </ScrollTrigger>
                  <p className="leading-relaxed">Organic Products</p>
                </div>
              </div>
              <div
                className="p-4 md:w-1/4 sm:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={"600"}
              >
                <div className=" px-4 py-6 rounded-lg shadow-xl">
                  <Sunrise className="h-14 w-14 text-indigo-500 mx-auto" />
                  {/* @ts-ignore */}
                  <ScrollTrigger onEnter={() => shouldCountUp(true)}>
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      {countUp && <CountUp end={5} duration={2} delay={0.5} />}+
                    </h2>
                  </ScrollTrigger>
                  <p className="leading-relaxed">Years of Experince</p>
                </div>
              </div>
              <div
                className="p-4 md:w-1/4 sm:w-1/2 w-full"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay={"700"}
              >
                <div className=" px-4 py-6 rounded-lg shadow-xl">
                  <LandPlot className="h-14 w-14 mx-auto text-indigo-500" />
                  {/* @ts-ignore */}
                  <ScrollTrigger onEnter={() => shouldCountUp(true)}>
                    <h2 className="title-font font-medium text-3xl text-gray-900">
                      {countUp && <CountUp end={50} duration={4} delay={0.5} />}
                      +
                    </h2>
                  </ScrollTrigger>
                  <p className="leading-relaxed">Land area</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="text-gray-600 body-font relative" id="product">
        <div className="absolute top-0 bg-slate-100 -up-4 w-full h-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1
                className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl text-left"
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-once="true"
              >
                Our Organic Products
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Discover our range of fresh and organic products, delivered
              straight from our farm to your table.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {Products.map((product, index) => (
              <div
                key={index}
                className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay={`${index + 1}00`}
              >
                <div className=" rounded-lg relative group h-[500px] border border-green-100">
                  {/* Discount Badge */}
                  <div className="absolute top-0 right-0 m-2 bg-green-800 text-white text-xs font-medium px-2 py-1 rounded-full z-10">
                    {product.discount}
                  </div>
                  {/* Image Wrapper with Hover Effect */}
                  <div className="relative overflow-hidden h-[70%]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                      src={product.image}
                      alt={product.title}
                    />
                    {/* Hover Icons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-indigo-500 hover:text-white">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="bg-white p-2 rounded-full shadow-lg hover:bg-indigo-500 hover:text-white">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="absolute bottom-0 left-0 w-full bg-orange-50 p-4 flex items-center justify-between">
                    <div>
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-2 flex items-center justify-between">
                        Organic <ShoppingBag className="h-4 w-4" />
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 flex items-center justify-between">
                        {product.title}
                        <span className="inline-block text-lg font-bold text-green-600">
                          {product.price}
                        </span>
                      </h2>
                      <p className="leading-relaxed text-sm">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
