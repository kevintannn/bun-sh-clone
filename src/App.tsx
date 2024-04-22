import BunInstall from "./components/BunInstall";
import BunRun from "./components/BunRun";
import BunStep from "./components/BunStep";
import BunTest from "./components/BunTest";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearnByExample from "./components/LearnByExample";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-bg text-white">
      <Navbar />

      <div className="border-b border-b-gray-700 md:px-28">
        <Hero />
      </div>

      <div className="border-b border-b-gray-700 bg-bgdark">
        <BunRun />
      </div>

      <div className="border-b border-b-gray-700">
        <BunInstall />
      </div>

      <div className="border-b border-b-gray-700 bg-bgdark">
        <BunTest />
      </div>

      <div className="border-b border-b-gray-700">
        <BunStep />
      </div>

      <div className="border-b border-b-gray-700 bg-bgdark">
        <LearnByExample />
      </div>

      <div className="bg-bgdark">
        <Footer />
      </div>
    </div>
  );
};

export default App;
