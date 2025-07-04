import Button from "../atoms/Button1";

function DownloadCard({ image, title, version, buttonText, cardId }) {
  return (
    <div className={`download-card ${cardId || ""}`}>
      <div className="card-image">{image}</div>
      <h3 className="card-title">{title}</h3>
      <div className="card-divider"></div>
      <p className="card-version">Minimum version {version}</p>
      <div className="card-button">
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
}

export default DownloadCard;