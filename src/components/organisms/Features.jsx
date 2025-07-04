import { useState } from 'react';
import FeaturesNav from "../molecules/FeaturesNav";
import FeaturesImg from "../atoms/Features-img";

function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const featuresData = [
    {
      title: "Simple Bookmarking",
      image: <FeaturesImg />,
      heading: "Bookmark in one click",
      description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      buttonText: "More Info"
    },
    {
      title: "Speedy Searching",
      image: <FeaturesImg />,
      heading: "Intelligent search",
      description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      buttonText: "More Info"
    },
    {
      title: "Easy Sharing",
      image: <FeaturesImg />,
      heading: "Share your bookmarks",
      description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      buttonText: "More Info"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>

      <FeaturesNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="tab-content">
        <div className="tab-layout">
          <div className="tab-image">
            {featuresData[activeTab].image}
          </div>
          <div className="tab-text">
            <h3>{featuresData[activeTab].heading}</h3>
            <p>{featuresData[activeTab].description}</p>
            <button className="simple-button">{featuresData[activeTab].buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;