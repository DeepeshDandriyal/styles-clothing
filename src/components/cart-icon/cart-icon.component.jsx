import "./cart-icon.styles.scss";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
