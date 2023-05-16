import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-black font-bold">
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}

export default App;
