import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Challenge from "./components/challenge/Challenge";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/Services";
import Pie from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Challenge />
      <Testimonials />
      <Contact />
      <Pie />
    </div>
  );
}

export default App;
