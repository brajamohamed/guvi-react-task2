import "./App.css";
import Header from "./Header/header";
import Hero from "./Hero/hero.jsx";
import Home from "./Home/home";
import Footer from "./Footer/footer";

let products = [
  {
    product: "p1",
    category: "Fancy Product",
    price1: "40.00",
    price2: "80.00",
  },
  {
    product: "p2",
    category: "Special Item",
    rating: 5,
    price1: "20.00",
    disc_price: "80.00",
    sale: true,
  },
  {
    product: "p3",
    category: "Sale Item",
    price1: "20.00",
    disc_price: "80.00",
    sale: true,
  },
  { product: "p4", category: "Polular Item", rating: 5, price1: "40.00" },
  {
    product: "p5",
    category: "Sale Item",
    price1: "50.00",
    disc_price: "25.00",
    sale: true,
  },
  {
    product: "p6",
    category: "Fancy Product",
    price1: "120.00",
    price2: "280.00",
  },
  {
    product: "p7",
    category: "Special Item",
    rating: 5,
    price1: "20.00",
    disc_price: "18.00",
    sale: true,
  },
  { product: "p8", category: "Polular Item", rating: 5, price1: "40.00" },
];
function App() {
  return (
    <div id="app">
      <Header />
      <Hero />
      <Home products={products} />
      <Footer />
    </div>
  );
}

export default App;
