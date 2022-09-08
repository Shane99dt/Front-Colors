/* eslint-disable react-hooks/exhaustive-deps */

import H1 from "../components/H1"
import H3 from "../components/H3"
import H4 from "../components/H4"
import Button from "../components/Button"
import CompleteCard from "../components/CompleteCard"

import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Commandes = () =>{

    const [articles,setArticles] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)

    const navigate = useNavigate()

    const handleBackClick = () =>{
        localStorage.setItem('articlesID', '')
        navigate('/Articles')
    }

    useEffect(() => {
        let Ids;
        if (localStorage.articlesID) {
          const localArticlesIds = localStorage.getItem("articlesID");
          Ids = JSON.parse(localArticlesIds);
          fetchPanier(Ids);
        }
      }, []);

      useEffect(()=>{
        let totalprice=0
        articles.forEach(article=>{
            totalprice += article.price
        })
        setTotalPrice(totalprice/100);
      },[articles])
    
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
        <div className="commandetitle-container">
            <H1>MERCI POUR VOTRE ACHAT!</H1>
            <H3>Récapitulatif de votre commande</H3>
        </div>
        <div className="jcc">
            {articles.map((article) => {
                return (
                <CompleteCard
                    key={article.productName}
                    image={article.productImage}
                    title={article.productName}
                    price={article.price}
                    description={article.description}
                    owner={article.productOwner}
                    className={"panier-container commande-container jcc"}
                />
                );
            })}
         </div>
         <div className="flex center totalprice">
            <H4>Total:{totalPrice}$</H4>
         </div>

        <div className="flex jce retourbutton">
            <Button text={"Retour"} handleClick={handleBackClick}/>
        </div>
    </>
}

export default Commandes