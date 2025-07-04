
import DownloadCard from "../molecules/DownloadCard";
import FirefoxImg from "../atoms/Firefox-img"; // Asegúrate de importar las imágenes
import ChromeImg from "../atoms/Chrome-img";
import OperaImg from "../atoms/Opera-img";

function Download() {
  const browsers = [
    {
      image: <FirefoxImg />,
      title: "Add to Firefox",
      version: "55",
      buttonText: "Add & Install Extension"
    },
    {
      image: <ChromeImg />,
      title: "Add to Chrome",
      version: "62",
      buttonText: "Add & Install Extension"
    },
    {
      image: <OperaImg />,
      title: "Add to Opera",
      version: "46",
      buttonText: "Add & Install Extension"
    }
  ];

  return (
    <article className="App-hero">
      <h1>Download</h1>
      <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      <div className="App-dd">
        {browsers.map((browser, index) => (
          <DownloadCard
            key={index}
            image={browser.image}
            title={browser.title}
            version={browser.version}
            buttonText={browser.buttonText}
          />
        ))}
      </div>
    </article>
  );
}

export default Download;