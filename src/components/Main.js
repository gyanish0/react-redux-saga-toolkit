import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeFromoCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch();
  const dataResult = useSelector((state) => state.productList);
  console.log("dataResult", dataResult);
  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <br />
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <br />

      <div
        className="product-container"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {dataResult.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "20px",
              padding: "10px",
            }}
          >
            <img src={item.photo} alt="product" />
            <div>
              <h3>Name : {item.name}</h3>
              <h3>description : {item.description}</h3>
              <h3>Price : {item.price}</h3>
              <h3>id : {item.id}</h3>
            </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromoCart(item.id))}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
