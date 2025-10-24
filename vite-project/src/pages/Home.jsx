import React, { useState, useEffect } from "react";
import InfoCard from "../components/InfoCard/InfoCard";
import GridContainer from "../components/GridContainer/GridContainer";
import Card from "../components/Card/Card";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

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
        <button onClick={() => setCount((c) => c + 1)}>Current count: {count}</button>
      </div>
      <div className="card">
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>

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
    </>
  );
}

export default Home;