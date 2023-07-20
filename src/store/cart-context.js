import React from "react";

const cartContext = React.createContext({
  item: [1],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});


export default cartContext ; 


// import React from 'react'

// const cartContext = () => {
//   return (
//     <div>cart-context</div>
//   )
// }

// export default cartContext ;