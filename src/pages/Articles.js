import H1 from "../components/H1";
import Header from "../components/Header"
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Articles = () => {

    const [products, setProduct] = useState([])
    const [categories, setCatergories] = useState([])
    const [cartQuantity,setCartQuantity] = useState(localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0)

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const request = await fetch('https://e-commerce-fantastic4.herokuapp.com/products')
        const response = await request.json()
        setProduct(response)
        console.log(response)
    }

    const handleAddClick = () =>{
        let Ids
    
        if (localStorage.articlesID){
            const localArticlesIds= localStorage.getItem("articlesID")
            Ids = JSON.parse(localArticlesIds)
        }else{
           Ids=[]
        }

        Ids.push()

        const stringifiedArticlesIds = JSON.stringify(Ids)
        localStorage.setItem('articlesID', stringifiedArticlesIds)
        setCartQuantity(Ids.length)
    }

  return (
    <>
    <Header length={cartQuantity}/>
    <div className="title-container">
      <H1>SHOP</H1>
    </div>
    <section className="articles-container">
        {products.map((product) => {
            return(
                <Card key={product.productName}
                image={'https://i.postimg.cc/HshMxf8m/Rectangle-43.png'} 
                title={product.productName} 
                price={`${product.price / 100}$`} />
            )
        })}
    </section>
    </>
  );
};

export default Articles;
