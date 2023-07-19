import React from "react";

const CartContext = React.createContext({
  item: [1],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});


export default CartContext ; 