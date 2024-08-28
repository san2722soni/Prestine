"use client"

//@ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Define the props for your component
interface AOSProps {
  children: React.ReactNode;
  animation?: string;
  duration?: number;
  once?: boolean
}

export default function AOSWrapper({ children, animation = "fade-up", duration = 1000, once = true }: AOSProps) {
  
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  // Render the children inside a div with the AOS attributes
  return (
    <div data-aos={animation} data-aos-duration={duration} data-aos-once={once}>
      {children}
    </div>
  );
}
