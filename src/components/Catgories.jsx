import { Card, Col, Row, Image, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Categories = () => {
  const [spinning, setSpinning] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  useEffect(() => {
    setSpinning(true); 
    const fetchProducts = async () => {
      try {
        let response;
        if (selectedCategory === "All") {
          response = await fetch("https://fakestoreapi.com/products");
        } else {
          response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setSpinning(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="cat-home">
      <h1 className="category-title">{selectedCategory}</h1>
      <br />
      <div
        className="category-filters"
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            type={selectedCategory === category ? "primary" : "default"}
            onClick={() => handleCategoryChange(category)}
            style={{
              margin: "0 10px",
              backgroundColor:
                selectedCategory === category ? "rgb(255, 144, 53)" : "white",
              color: selectedCategory === category ? "white" : "black",
            }}
          >
            {category}
          </Button>
        ))}
      </div>


      <Spin spinning={spinning} indicator={<LoadingOutlined spin />} size="large" tip="Loading..." style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
        <Row gutter={[24, 32]} justify="center">
          {products.map((product) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  bordered={true}
                  hoverable={true}
                  className="product-card"
                  cover={
                    <Image
                      alt="example"
                      src={product.image}
                      preview={false}
                      style={{
                        height: 300,
                        objectFit: "contain",
                        borderRadius: 8,
                      }}
                    />
                  }
                >
                  <Meta
                    title={product.title}
                    description={`${product.description.substring(0, 50)}...`}
                    style={{ textAlign: "center", marginBottom: "10px" }}
                  />
                  <Button
                    type="primary"
                    className="buy-now-btn"
                    style={{
                      marginTop: 10,
                      width: "100%",
                      backgroundColor: "rgb(255, 144, 53)",
                      color: "white",
                      borderRadius: 5,
                    }}
                  >
                    Buy Now
                  </Button>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Spin>
    </div>
  );
};

export default Categories;
