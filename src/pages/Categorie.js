/* eslint-disable react-hooks/exhaustive-deps */

import H1 from "../components/H1";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Select from "../components/Select";

const Categorie = () => {
  const [products, setProduct] = useState([]);
  const [categories, setCatergories] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [params]);

  const handleNavigate = (id) => {
    navigate(`${id}`);
  };

  const fetchProducts = async (trie) => {
    let request;
    if (trie) {
      request = await fetch(
        `http://localhost:5000/category/${params.id}?price=${trie}`
      );
    } else {
      request = await fetch(`http://localhost:5000/category/${params.id}`);
    }
    const response = await request.json();
    setProduct(response.Products);
  };

  const fetchCategories = async () => {
    const request = await fetch("http://localhost:5000/category");
    const response = await request.json();
    setCatergories(response);
  };

  const Orderby = (e) => {
    if (e) {
      fetchProducts(e.target.value);
    } else {
      fetchProducts();
    }
  };

  return (
    <>
      <Header
        length={
          localStorage.articlesID
            ? JSON.parse(localStorage.getItem("articlesID")).length
            : 0
        }
      />
      <div className="title-container">
        <H1>SHOP</H1>
      </div>
      <div className="category-button">
        <Button text={"ALL"} handleClick={() => handleNavigate("/Articles")} />
        {categories.map((category) => {
          return (
            <Button
              key={category.id}
              text={category.categoryName}
              handleClick={() => handleNavigate(`/Category/${category.id}`)}
            />
          );
        })}
      </div>
      <div className="flex center">
        <Select
          options={[
            { value: "", text: "do not sort" },
            { value: "ASC", text: "price, low to high" },
            { value: "DESC", text: "price, high to low" },
          ]}
          value=""
          handleChange={Orderby}
        />
      </div>
      <section className="articles-container">
        {products.map((product) => {
          return (
            <Card
              key={product.productName}
              image={product.productImage}
              title={product.productName}
              price={`${product.price / 100}$`}
              onclick={() => handleNavigate(`/Articles/${product.id}`)}
            />
          );
        })}
      </section>
    </>
  );
};

export default Categorie;
