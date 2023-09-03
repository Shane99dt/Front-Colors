/* eslint-disable react-hooks/exhaustive-deps */

import Header from "../components/Header";
import CompleteCard from "../components/CompleteCard";
import Loader from "../components/Loader";
import Confirm from "../components/Confirm";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchProducts();
  }, []);

  const [cartQuantity, setCartQuantity] = useState(
    localStorage.articlesID
      ? JSON.parse(localStorage.getItem("articlesID")).length
      : 0
  );

  const [product, setProduct] = useState(null);
  const [model, setModel] = useState("none");

  const Added = () => {
    setModel("display");
    setTimeout(() => {
      setModel("none");
    }, 2000);
  };

  const fetchProducts = async () => {
    const request = await fetch(`http://localhost:5000/products/${id}`);
    const response = await request.json();
    setProduct(response);
  };

  const handleAddClick = (id) => {
    let Ids;

    if (localStorage.articlesID) {
      const localArticlesIds = localStorage.getItem("articlesID");
      Ids = JSON.parse(localArticlesIds);
    } else {
      Ids = [];
    }

    Ids.push(id);

    const stringifiedArticlesIds = JSON.stringify(Ids);
    localStorage.setItem("articlesID", stringifiedArticlesIds);
    setCartQuantity(Ids.length);

    Added();
  };

  return (
    <>
      <Header length={cartQuantity} />
      <Confirm ModalName={model} />
      {product ? (
        <CompleteCard
          image={product.productImage}
          title={product.productName}
          price={product.price}
          description={product.description}
          owner={product.productOwner}
          handleClick={() => handleAddClick(product.id)}
          text="Add to Cart"
          className="Article-container jcc"
          button
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Article;
