import { images } from "../../assets/images";
import StyledImage from "../atoms/ImagesStyled";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button1";
import HamburgerMenu from "../molecules/Hamburger";
function Header() {
  return (
    <header className="App-header">
      <StyledImage src={images.logo} alt="logo header" />
      <div className="Hide"><NavLinks /></div>
      <div className="Hide"><Button className="red-button">LOGIN</Button></div>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
