import "./App.css";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import data from "./components/data.js"
function App() {
  const cards = data.map(items => {
    return (
      <Card
       image={items.image}
          status={items.status}
          rating={items.rating}
          rating_no={items.rating_no}
          country={items.country}
          description={items.description}
          text={items.text}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="cards">
       
        {cards}
        
      </div>
    </div>
  );
}

export default App;
