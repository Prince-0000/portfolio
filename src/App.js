import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-black font-bold">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
