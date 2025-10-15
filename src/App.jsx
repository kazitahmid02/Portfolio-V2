import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  About,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* ✅ Navbar is now truly persistent */}
      <Navbar />

      <div className="relative z-0 bg-black">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>

        {/* Experience Section */}
        <section className="relative z-0">
          <Experience />
          <StarsCanvas />
        </section>

        {/* Works Section */}
        <section className="relative z-0">
          <Works />
          <StarsCanvas />
        </section>

        {/* Tech Section */}
        <section className="relative z-0">
          <Tech />
          <StarsCanvas />
        </section>

        {/* About Section */}
        <section className="relative z-0">
          <About />
          <StarsCanvas />
        </section>

        {/* Feedbacks Section */}
        <section className="relative z-0">
          <Feedbacks />
          <StarsCanvas />
        </section>

        {/* Contact Section */}
        <section className="relative z-0">
          <Contact />
          <StarsCanvas />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
