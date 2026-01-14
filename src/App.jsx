import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/CardSection/CardSection";
// import katieZaferesImage from "./assets/katie-zaferes.png";
// import cristianoImage from "./assets/cristiano.jpg";
// import narcosImage from "./assets/narcosImage.jpg";
// import starImage from "./assets/Star1.png";
import data from "./data.js";

function App() {
  const cardData = data.map((card) => {
    return <CardSection key={card.id} {...card} />;
  });
  // const nums = [1, 2, 3, 4, 5];
  // console.log(nums);
  // const squared = nums.map((num) => num * num);
  // console.log(squared);

  // const names = ["alice", "bob", "charlie", "danielle"];
  // console.log(names);
  // const capitalized = names.map((name) => {
  //   return name.charAt(0).toUpperCase() + name.slice(1);
  // });
  // console.log(capitalized);

  // const pokemons = ["Bulbasur", "Charamander", "Squirtel"];
  // const pokemonsWithTag = pokemons.map((pokemon) => {
  //   return `<p>${pokemon}</p>`;
  // });
  // console.log(pokemonsWithTag);

  // const colors = [
  //   <h3>"Violet"</h3>,
  //   <h3>"Indigo"</h3>,
  //   <h3>"Blue"</h3>,
  //   <h3>"Green"</h3>,
  //   <h3>"Yellow"</h3>,
  //   <h3>"Orange"</h3>,
  //   <h3>"Red"</h3>,
  // ];

  return (
    <div>
      {/* {colors} */}
      <Navbar />
      <HeroSection />
      <div className="card-container">{cardData}</div>
      {/* <div className="card-container">
        <CardSection
          image={katieZaferesImage}
          star={starImage}
          rating="5.0"
          span="(6).USA"
          title="Life lessons with Katie Zaferes"
          cardRate="From $136"
          cardRateUnit="/ person"
        />
        <CardSection
          image={cristianoImage}
          star={starImage}
          rating="5.0"
          span="(5).PG"
          title="Motivation from the GOAT"
          cardRate="From $999"
          cardRateUnit="/ person"
        />
        <CardSection
          image={narcosImage}
          star={starImage}
          rating="5.0"
          span="(5).MX"
          title="Plata or Plomo"
          cardRate="From $777"
          cardRateUnit="/ person"
        />
        <CardSection
          image={katieZaferesImage}
          star={starImage}
          rating="5.0"
          span="(6).USA"
          title="Life lessons with Katie Zaferes"
          cardRate="From $136"
          cardRateUnit="/ person"
        />
        <CardSection
          image={cristianoImage}
          star={starImage}
          rating="5.0"
          span="(5).PG"
          title="Motivation from the GOAT"
          cardRate="From $999"
          cardRateUnit="/ person"
        />
        <CardSection
          image={narcosImage}
          star={starImage}
          rating="5.0"
          span="(5).MX"
          title="Plata or Plomo"
          cardRate="From $777"
          cardRateUnit="/ person"
        />
        <CardSection
          image={katieZaferesImage}
          star={starImage}
          rating="5.0"
          span="(6).USA"
          title="Life lessons with Katie Zaferes"
          cardRate="From $136"
          cardRateUnit="/ person"
        />
        <CardSection
          image={cristianoImage}
          star={starImage}
          rating="5.0"
          span="(5).PG"
          title="Motivation from the GOAT"
          cardRate="From $999"
          cardRateUnit="/ person"
        />
        <CardSection
          image={narcosImage}
          star={starImage}
          rating="5.0"
          span="(5).MX"
          title="Plata or Plomo"
          cardRate="From $777"
          cardRateUnit="/ person"
        />
      </div> */}
    </div>
  );
}

export default App;
