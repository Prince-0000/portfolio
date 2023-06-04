import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="text-black font-bold">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <ToastContainer />
    </div>
  );
}

export default App;
