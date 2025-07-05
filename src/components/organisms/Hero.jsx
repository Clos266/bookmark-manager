import Button from "../atoms/Button1";
import HeroImg from "../atoms/Hero-img";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <HeroImg />
        </div>
        <div className="hero-content">
          <h1>A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="hero-buttons">
            <Button>Get it on Chrome</Button>
            <Button>Get it on Firefox</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;