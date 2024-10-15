import React, { useState, useEffect } from "react";
import { Button } from "antd";
const Filters = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("electronics"); 
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + selectedCategory)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
    <h1 className="category-title">{selectedCategory}</h1>

      <div className="category-filters" style={{ marginBottom: "20px", textAlign: "center" }}>
        {categories.map((category) => (
          <Button
            key={category}
            type={selectedCategory === category ? "primary" : "default"}
            onClick={() => handleCategoryChange(category)}
            style={{
              margin: "0 10px",
              backgroundColor: selectedCategory === category ? "rgb(255, 144, 53)" : "white",
              color: selectedCategory === category ? "white" : "black",
            }}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default Filters;
