import Card from "./Card/card";
import "./home.css";

const Home = (props) => {
  let products = props.products;
  return (
    <div className="container product-card">
      {products.map((product) => {
        return <Card product={product} />;
      })}
    </div>
  );
};
export default Home;
