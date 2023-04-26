import "./cart-icon.styles.scss";
import React from "react";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
