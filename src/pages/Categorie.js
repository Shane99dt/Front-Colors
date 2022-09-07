import H1 from "../components/H1";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
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

  const fetchProducts = async () => {
    const request = await fetch(
      `https://e-commerce-fantastic4.herokuapp.com/category/${params.id}`
    );
    const response = await request.json();
    setProduct(response.Products);
  };

  const fetchCategories = async () => {
    const request = await fetch(
      "https://e-commerce-fantastic4.herokuapp.com/category"
    );
    const response = await request.json();
    setCatergories(response);
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
      <section className="articles-container">
        {products.map((product) => {
          return (
            <Card
              key={product.productName}
              image={product.productImage}
              title={product.productName}
              price={`${product.price / 100}$`}
              onclick={() => handleNavigate(product.id)}
            />
          );
        })}
      </section>
    </>
  );
};

export default Categorie;
