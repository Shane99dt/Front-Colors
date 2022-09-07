import H1 from "../components/H1";
import Button from "../components/Button";
import Header from "../components/Header";
import CompleteCard from "../components/CompleteCard";
import H2 from "../components/H2";

import { useState, useEffect } from "react";

const Panier = () => {
  const [cartQuantity, setCartQuantity] = useState(
    localStorage.articlesID
      ? JSON.parse(localStorage.getItem("articlesID")).length
      : 0
  );
  const [articles, setArticles] = useState([]);

  const handleRemoveClick = (id) => {
    const localArticlesIds = localStorage.getItem("articlesID");
    const Ids = JSON.parse(localArticlesIds);
    const index = Ids.indexOf(id);
    Ids.splice(index, 1);
    const stringifiedArticlesIds = JSON.stringify(Ids);
    localStorage.setItem("articlesID", stringifiedArticlesIds);
    setCartQuantity(Ids.length);
    fetchPanier(Ids);
  };

  useEffect(() => {
    let Ids;
    if (localStorage.articlesID) {
      const localArticlesIds = localStorage.getItem("articlesID");
      Ids = JSON.parse(localArticlesIds);
      fetchPanier(Ids);
    }
  }, []);

  const fetchPanier = async (Ids) => {
    const promises = Ids.map((Id) => {
      return fetchArticle(Id);
    });
    const promiseAllResult = await Promise.all(promises);
    setArticles(promiseAllResult);
  };

  const fetchArticle = async (id) => {
    const request = await fetch(
      `https://e-commerce-fantastic4.herokuapp.com/products/${id}`
    );
    const response = await request.json();
    return response;
  };

  return (
    <section className="cart-container">
      <Header length={cartQuantity} />
      <H1>Cart</H1>
    <div className="cart">
    <div className="cart-list">
      {articles.map((article) => {
        return (
          <CompleteCard
            key={article.productName}
            image={article.productImage}
            title={article.productName}
            price={article.price}
            description={article.description}
            owner={article.productOwner}
            handleClick={() => handleRemoveClick(article.id)}
            text="Remove from Cart"
            className={"panier-container"}
          />
        );
      })}
      </div>
    <div className="total">
      <H2>TOTAL :</H2>
    </div>
    </div>
    </section>
  );
};

export default Panier;
