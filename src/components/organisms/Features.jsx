
import FeaturesNav from "../molecules/FeaturesNav";
import FeaturesCard from "../molecules/FeaturesCard";

function Features() {
  return (
    <header className="App-hero">
      <h1>Features</h1>
      <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      <FeaturesNav />
      <FeaturesCard />
    </header>
  );
}

export default Features;
