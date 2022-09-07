import H1 from "../components/H1"
import Header from "../components/Header"
import H2 from "../components/H2"
import Button from "../components/Button"
import CompleteCard from "../components/CompleteCard"

import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Commandes = () =>{

    const [articles,setArticles] = useState([])

    const navigate = useNavigate()

    const handleBackClick = () =>{
        navigate('/')
    }



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
    




    return <>
        <Header length={localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0}/>
        <H1>MERCI POUR VOTRE ACHAT!</H1>
        <H2>Récapitulatif de votre commande</H2>
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
                    className={"panier-container"}
                />
                );
            })}
         </div>
        <Button text={"Retour"} handleClick={handleBackClick}/>
    </>
}

export default Commandes