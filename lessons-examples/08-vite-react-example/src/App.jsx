import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Products from "./components/Products";

// useState => [stato, fx(stato)]

const initialProds = [
  {
    id: 0,
    name: "banana",
  },
  {
    id: 1,
    name: "apple",
  },
  {
    id: 2,
    name: "ananas",
  },
];

function App() {
  const [items] = useState(initialProds);
  const [cart, setCart] = useState(0);

  console.log("Render update function running...");

  return (
    <div className="container">
      <Navbar />
      <h1>React first Day</h1>
      <p>starting day: {new Date().toTimeString()}</p>
      <button onClick={() => setCart(cart + 1)}>Aggiungi al carrello</button>
      <div>
        <article>
          <p>Prodotti nel carrello</p>
          numbero prodotti: {cart}
        </article>
      </div>
      <Form />
      <h2>Numero prodotti presenti: {items.length}</h2>
      <Products items={items} />
    </div>
  );
}

export default App;
