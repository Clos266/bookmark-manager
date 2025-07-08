import Logo from "../atoms/Logo1";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button1";
import HamburgerMenu from "../molecules/Hamburger";
function Header() {
  return (
    <header className="App-header">
      <Logo />
      <div className="Hide"><NavLinks />
      <Button>LOGIN</Button></div>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
