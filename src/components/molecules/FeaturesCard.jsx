import FeaturesImg from "../atoms/Features-img";
import Button from "../atoms/Button1";

function FeaturesCard({ 
  imageSrc, 
  imageAlt = "Feature illustration",
  title, 
  description, 
  buttonText = "More Info",
  isActive = false
}) {
  return (
    <div className={`tabcontent ${isActive ? 'active' : ''}`}>
      <div className="tab-layout">
        <div className="tab-image">
          <FeaturesImg src={imageSrc} alt={imageAlt} />
        </div>
        <div className="tab-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="Simple-button">
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;