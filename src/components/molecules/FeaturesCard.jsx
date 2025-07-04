import FeaturesImg from "../atoms/Features-img";
import Button from "../atoms/Button1";
      
function FeaturesCard() {
  return (
    <nav className="nav-links">
    <FeaturesImg />
    <p>Bookmark in one click
Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
    <Button>More Info</Button>
    </nav>
  );
}
export default FeaturesCard;