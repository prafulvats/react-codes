import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./utils/cartSlice";
const styles = {
    cardMain: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    card: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "16px",
      width: "200px",
      textAlign: "center",
      margin: "12px",
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    button: {
      marginTop: "10px",
      padding: "8px 12px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
const Shopping = () => {
  const [lists, setList] = useState([]);
  //Reading Data from Store
  const cart = useSelector((store) => store.cart.items);
  console.log(cart, 'cart')
  // To dispatch the action
  const dispatch = useDispatch();

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setList(json));
  }, []);

  return (
    <div style={styles.cardMain}>
      {lists.length &&
        lists.map((item, index) => (
          <div style={styles.card} key={index}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <h3>{item.title}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button style={styles.button} onClick={() => dispatch(addItem(item))}>Add to Cart</button>
          </div>
        ))}
      <div><span onClick={() => dispatch(removeItem())}>Remove Item from Cart</span></div>
    </div>
  );
};

export default Shopping;
