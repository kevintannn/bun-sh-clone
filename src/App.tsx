import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-bg text-white">
      <Navbar />

      <div className="border-b border-b-gray-700 px-28">
        <Hero />
      </div>

      <div className="border-b border-b-gray-700 bg-bgdark">
        <Cards />
      </div>
    </div>
  );
};

export default App;
