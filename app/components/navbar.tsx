"use client";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
//@ts-ignore
import { Link }  from "react-scroll"
import {
  Home,
  InfoIcon,
  ListCheck,
  Phone,
  ShoppingCartIcon,
  Sprout,
  TreesIcon,
  UserRoundPlus,
} from "lucide-react";
import { Quicksand, Poppins } from "next/font/google";
import AOSWrapper from "./ui/aos";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font h-32">
      <div className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/2BG.png"
            alt="nature"
            width={130}
            className="block m-0 p-0 object-contain"
            style={{
              objectFit: "contain",
              objectPosition: "center",
              height: "auto",
            }}
          />
        </a>

          <nav
            className={`${poppins.className} md:mr-auto md:ml-4 md:py-1 md:pl-12 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center overflow-x-hidden`}
          >
        <AOSWrapper animation="fade-right" duration={1000} once={true}>
            <a className="nav-item" href="#Hhome">
              <Home className="h-6 w-6 icon" />
              <span className="text">Home</span>
            </a>
            <a className="nav-item" href="#About">
              <InfoIcon className="h-6 w-6 icon" />
              <span className="text">About</span>
            </a>
            <a className="nav-item" href="#services">
              <Sprout className="h-6 w-6 icon" />
              <span className="text">Services</span>
            </a>
            <a className="nav-item" href="#product">
              <TreesIcon className="h-6 w-6 icon" />
              <span className="text">Product</span>
            </a>
            <a className="nav-item" href="#contact">
              <Phone className="h-6 w-6 icon" />
              <span className="text">Contact</span>
            </a>
        </AOSWrapper>
          </nav>
        <Button
          variant={"ghost"}
          size={"default"}
          className={`${quicksand.className} tracking-wider bg-transparent text-gray-900 mr-8 text-[15px]`}
        >
          Sign In <UserRoundPlus className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant={"default"}
          size={"default"}
          className={`bg-[#33b485] text-white tracking-wider hover:bg-teal-700 text-[15px] ${quicksand.className}`}
        >
          Checkout <ShoppingCartIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
