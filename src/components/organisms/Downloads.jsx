import DownloadCard from "../molecules/DownloadCard";

import { images } from "../../assets/images";

import StyledImage from "../atoms/ImagesStyled";

function Download() {
  const browsers = [
    {
      id: "chrome",
      image: <StyledImage src={images.chrome} alt="Chrome logo" />,
      title: "Add to Chrome",
      version: "62",
      buttonText: "Add & Install Extension"
    },
    {
      id: "firefox",
      image: <StyledImage src={images.firefox} alt="Chrome logo" />,
      title: "Add to Firefox",
      version: "55",
      buttonText: "Add & Install Extension"
    },
    {
      id: "opera",
      image: <StyledImage src={images.opera} alt="Chrome logo" />,
      title: "Add to Opera",
      version: "46",
      buttonText: "Add & Install Extension"
    }
  ];

  return (
    <section className="download-section">
      <div className="download-header">
        <h2>Download the extension</h2>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.</p>
      </div>
      
      <div className="download-cards-container">
        {browsers.map((browser) => (
          <DownloadCard
            key={browser.id}
            cardId={browser.id}
            image={browser.image}
            title={browser.title}
            version={browser.version}
            buttonText={browser.buttonText}
          />
        ))}
      </div>
    </section>
  );
}

export default Download;