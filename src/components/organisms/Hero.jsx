import Button from "../atoms/Button1";
import HeroImg from "../atoms/Hero-img";

function Hero() {
  return (
    <header className="App-hero">
       <HeroImg />
      <h1>A Simple Bookmark Manager</h1>
      <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
      <Button>Get it on Chrome</Button>
      <Button>Get it on Firefox</Button>
     

    </header>
  );
}

export default Hero;
