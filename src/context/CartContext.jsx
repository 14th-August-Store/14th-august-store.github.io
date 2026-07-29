import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });


  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );
  };


  const addToCart = (product) => {

    const existing = cart.find(
      (item) => item.id === product.id
    );


    let newCart;


    if (existing) {

      newCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

    } else {

      newCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ];

    }


    updateCart(newCart);
  };



  const removeFromCart = (id) => {

    const newCart = cart.filter(
      (item) => item.id !== id
    );

    updateCart(newCart);
  };



  const increaseQuantity = (id) => {

    const newCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    updateCart(newCart);
  };



  const decreaseQuantity = (id) => {

    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );

    updateCart(newCart);
  };



  const clearCart = () => {

    setCart([]);

    localStorage.removeItem("cart");
  };



  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}