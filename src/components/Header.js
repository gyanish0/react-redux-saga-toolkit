import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log("=====>", result);
  return (
    <div className="header">
      <Link to="/">
        <h3 style={{ float: "left", margin: "0", padding: "30px" }}>E-Com</h3>
      </Link>
      <div className="search-box">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => dispatch(productSearch(e.target.value))}
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
