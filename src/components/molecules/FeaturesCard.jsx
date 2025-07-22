import { images } from "../../assets/images";
import Button from "../atoms/Button1";
import StyledImage from "../atoms/ImagesStyled";

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
          <StyledImage src={images.features} alt={imageAlt} />
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