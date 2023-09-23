import "./card.css";
import starimg from "./star-solid.svg";
const Card = (props) => {
  const product = props.product;
  console.log("products in card:", product);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card text-center border rounded mb-5 mx-4">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="dummy image"
        />
        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title fw-bolder my-2">{product.category}</h5>
          {product.rating && (
            <div className="my-2">
              <img id="rating" src={starimg} alt="star" />
              <img id="rating" src={starimg} alt="star" />
              <img id="rating" src={starimg} alt="star" />
              <img id="rating" src={starimg} alt="star" />
              <img id="rating" src={starimg} alt="star" />
            </div>
          )}

          {product.category == "Fancy Product" && (
            <h6>
              ${product.price1} - ${product.price2}
            </h6>
          )}

          {product.category == "Special Item" && (
            <>
              <h6>
                <span className="text-decoration-line-through">
                  ${product.price1}
                </span>{" "}
                ${product.disc_price}
              </h6>
              <span className="bg-dark text-white p-1 rounded sale">Sale</span>
            </>
          )}
          {product.category == "Sale Item" && (
            <>
              {" "}
              <h6>
                <span className="text-decoration-line-through">
                  ${product.price1}
                </span>{" "}
                ${product.disc_price}
              </h6>
              <span className="bg-dark text-white p-1 rounded sale">Sale</span>
            </>
          )}

          {product.category == "Polular Item" && <h6>${product.price1}</h6>}
        </div>
        {/* Card Body end */}
        <div className="mb-3">
          <button className="border border-black rounded bg-white p-2">
            {product.category == "Fancy Product"
              ? "View options"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
