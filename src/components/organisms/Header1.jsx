import Logo from "../atoms/Logo1";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button1";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <NavLinks />
      <Button>LOGIN</Button>
    </header>
  );
}

export default Header;
