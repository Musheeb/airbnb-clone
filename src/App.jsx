import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/CardSection/CardSection";
import katieZaferesImage from "./assets/katie-zaferes.png";
import cristianoImage from "./assets/cristiano.jpg";
import narcosImage from "./assets/narcosImage.jpg";
import starImage from "./assets/Star1.png";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="card-container">
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
      </div>
    </>
  );
}

export default App;
