import Analytics from "./components/Analytics";
// import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="text-black font-bold">
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      {/* <Banner /> */}
      <Footer />
    </div>
  );
}

export default App;
 