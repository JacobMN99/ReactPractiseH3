import { useState } from "react";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import GridContainer from "./components/GridContainer/GridContainer";

function App() {
  const [count, setCount] = useState(0);

  const cards = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: `Product ${i + 1}`,
    image: "",
    price: `$${(i + 1) * 5}`,
    description: `This is a short description for product ${i + 1}.`,
    buttonText: "Buy",
  }));

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current count: {count}    
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count * 0)}>
          Reset count
        </button>
      </div>

      <Header headerText="Jacob Malthe Nielsen" />
      <InfoCard hobby1="Gaming" hobby2="Padel" hobby3="Kode" />

      <GridContainer>
        {cards.map((c) => (
          <Card
            key={c.id}
            title={c.title}
            image={c.image}
            price={c.price}
            description={c.description}
            buttonText={c.buttonText}
          />
        ))}
      </GridContainer>

      <Footer footertext="Jeg er 25 år gammel" />
    </>
  );
}

export default App;
