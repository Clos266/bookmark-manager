import Header from "./components/organisms/Header1";
import Hero from "./components/organisms/Hero";
import Features from "./components/organisms/Features";
import "./App.css";
import "./index.css";
import Footer from "./components/organisms/Footer";
import Download from "./components/organisms/Downloads";
import Prefooter from "./components/organisms/Prefooter";
import Faq from "./components/organisms/Faq";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default App;
