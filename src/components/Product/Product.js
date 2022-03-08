import { useStateValue } from "../Context/StateProvider";
import "./product.css";
//import productImg from "./assets/images/products.png";
function Product({ id, title, price, starRating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log({ basket });
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: starRating,
      },
    });
  };

  return (
    <>
      <div className="product">
        <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(starRating)
              .fill()
              .map((_, i) => (
                <p key={i}>&#127775;</p>
              ))}
          </div>
        </div>
        <img src={image} alt="productImg" className="product__image" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </>
  );
}

export default Product;
