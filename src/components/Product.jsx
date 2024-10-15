import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Carousel, Button } from "antd";
import { useDispatch } from "react-redux";
import { addProduct } from "../utils/cartSlice";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-carousel">
          <Carousel autoplay>
            <div className="carousel-slide">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            
          </Carousel>
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <h3 className="product-price">${product.price}</h3>

          <div className="product-actions">
            <Button
              style={{
                backgroundColor: "#ff9035",
                color: "white",
                borderRadius: "5px",
                width: "150px",
                fontSize: "16px",
              }}
            >
              Buy Now
            </Button>
            <Button
              onClick={handleAddToCart}
              style={{
                backgroundColor: "white",
                color: "#ff9035",
                border: "2px solid #ff9035",
                borderRadius: "5px",
                width: "150px",
                fontSize: "16px",
                marginLeft: "15px",
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
