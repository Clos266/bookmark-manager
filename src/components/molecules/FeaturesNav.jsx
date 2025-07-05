import FeaturesCard from "./molecules/FeaturesCard";
import FeaturesNav from "./molecules/FeaturesNav";
import { useState } from "react";
import img1 from "../../assets/images/img-features.svg";
import img2 from "../../assets/images/img-speedy.svg";
import img3 from "../../assets/images/img-easysharing.svg";

function Features() {
  const [activeTab, setActiveTab] = useState(0);
  
  const featuresData = [
    {
      imageSrc: img1,
      title: "Simple Bookmarking",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: img2,
      title: "Speedy Searching",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      imageSrc: img3,
      title: "Easy Sharing",
      description: "Lorem ipsum dolor sit amet...",
    }
  ];

  return (
    <div>
      <FeaturesNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {featuresData.map((feature, index) => (
        <FeaturesCard
          key={index}
          isActive={activeTab === index}
          imageSrc={feature.imageSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

export default Features;