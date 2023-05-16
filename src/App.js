import Analytics from "./components/Analytics";
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
    </div>
  );
}

export default App;
