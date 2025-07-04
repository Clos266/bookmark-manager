
import Button from "../atoms/Button1";

function DownloadCard({ image, title, version, buttonText }) {
  return (
    <div className="ddCards">
      <div className="card-image">{image}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-version">Minimum version {version}</p>
      <div className="card-button">
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
}

export default DownloadCard;