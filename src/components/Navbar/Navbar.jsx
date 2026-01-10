import "./Navbar.css";
import airbnbImage from "../../assets/airbnb-image.png";

function Nav() {
  return (
    <nav className="nav-bar">
      <img src={airbnbImage} alt="airbnb-image" className="nav--logo" />
    </nav>
  );
}

export default Nav;
