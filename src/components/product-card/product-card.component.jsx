import "./product-card.styles.scss";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { Button_type_classes } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductTOCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={Button_type_classes.inverted}
        onClick={addProductTOCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
