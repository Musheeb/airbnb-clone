import "./CardSection.css";
import katieZaferesImg from "../../assets/katie-zaferes.png";
import starImg from "../../assets/Star1.png";

function CardSection() {
  return (
    <div className="card-container">
      <div className="card-single">
        <img
          src={katieZaferesImg}
          alt="katie-zaferes-img"
          className="card-image"
        />
        <div className="card-rating">
          <img src={starImg} alt="star-image" className="card-star" />
          <p>
            5.0 <span>(6).USA</span>
          </p>
        </div>
        <p className="card-title">Life lessons with Katie Zaferes </p>
        <p className="card-rate">
          <span>From $136 </span> / person
        </p>
      </div>
    </div>
  );
}

export default CardSection;
