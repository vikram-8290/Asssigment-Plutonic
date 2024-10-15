import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Catgories from "./Catgories";
import Filters from "./Filters";

const Body = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((json) => setCategories(json))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);


  return (
    <div className="body">
      <Slider />
      <Catgories categories={categories} />
    </div>
  );
};

export default Body;
