import Button from "../atoms/Button1";

function FeaturesNav() {
  return (
    <nav className="nav-links">
      <ul>
        <li><Button>Simple Bookmarking</Button></li>
        <li><Button>Speedy Searching</Button></li>
        <li><Button>Easy Sharing</Button></li>
      </ul>
    </nav>
  );
}

export default FeaturesNav;
