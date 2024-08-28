import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonial from "./components/testimonial";

const Home = () => {
  return (
    <>
      <section id="Home">
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
