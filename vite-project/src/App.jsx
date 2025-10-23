import { useState } from "react";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Header />
      <InfoCard />
      <Footer />
    </>
  );
}

export default App;
