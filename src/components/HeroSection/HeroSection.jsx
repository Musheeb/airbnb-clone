import "./HeroSection.css";
import groupImage from "../../assets/Group-77.png";

function Hero() {
  return (
    <section className="hero-container">
      <img src={groupImage} alt="cool-group-image" className="hero-img" />
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
