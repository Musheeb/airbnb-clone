import "./CardSection.css";
// import katieZaferesImg from "../../assets/katie-zaferes.png";
// import starImg from "../../assets/Star1.png";

function CardSection({
  image,
  star,
  rating,
  span,
  title,
  cardRate,
  cardRateUnit,
  openSpots,
}) {
  // console.log(openSpots);
  return (
    // <div className="card-container">
    <div className="card-single">
      <div className="card-badge">{openSpots ? "ONLINE" : "SOLD OUT"}</div>
      <img src={image} alt="main-image" className="card-image" />
      <div className="card-rating">
        <img src={star} alt="star-image" className="card-star" />
        <p>
          {rating} <span>{span}</span>
        </p>
      </div>
      <p className="card-title">{title}</p>
      <p className="card-rate">
        <span>From ${cardRate} </span> {cardRateUnit}
      </p>
    </div>
    // </div>
  );
}

export default CardSection;
