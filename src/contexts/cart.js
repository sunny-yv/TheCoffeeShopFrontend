import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";
import { products } from "../../pages/ProductDetailsPage";

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });
  //   const [productState, productDispatch] = useReducer(productReducer, {
  //     byStock: false,
  //     byFastDelivery: false,
  //     byRating: 0,
  //     searchQuery: "",
  //   });

  //   console.log(productState);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
