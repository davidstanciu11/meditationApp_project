import Cards from "../components/Cards";
// import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Facts from "../components/Facts";
import Features from "../components/Features";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import Hero from "../components/Hero";
// import Navbar from "../components/Navbar";
// import NavbarMob from "../components/NavbarMob";
// import Newsletter from "../components/Newsletter";
// import Pricing from "../components/Pricing";

function App() {
  return (
    <>
      {" "}
      <div className="overflow_hidden">
        <Hero />
        <Cards />
        <Facts/>
        <Features/>
        <Courses/>
        <div className="h-[2000px]"></div>
      </div>
    </>
  );
}

export default App;
