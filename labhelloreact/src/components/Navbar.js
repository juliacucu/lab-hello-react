import Logo from "../images/Logo";
import ImageButton from "../images/Image-Button";

function Navbar() {
    return (
      <nav id='navbar-menu'>
        <div class='navbar-logo'>
          <Logo />
        </div>
        <div class='navbar-button'>
          <ImageButton />
        </div>
      </nav>
    );
  }
  
  export default Navbar;