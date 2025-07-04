import Logo from "../atoms/Logo1";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button1";


function Footer() {
  return (
    <footer className="App-header">
      <Logo />
      <NavLinks />
      <Button>fb</Button>
      <Button>X</Button>
    </footer>
  );
}

export default Footer;
