import H1 from "../components/H1";
import Header from "../components/Header"
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Articles = () => {

    const [products, setProduct] = useState([])
    const [categories, setCatergories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleNavigate = (id) => {
        navigate(`${id}`)
    }

    const fetchProducts = async () => {
        const request = await fetch('https://e-commerce-fantastic4.herokuapp.com/products')
        const response = await request.json()
        setProduct(response)
        console.log(response)
    }

  return (
    <>
    <Header length={localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0}/>
    <div className="title-container">
      <H1>SHOP</H1>
    </div>
    <section className="articles-container">
        {products.map((product) => {
            return(
                <Card key={product.productName}
                image={product.productImage} 
                title={product.productName} 
                price={`${product.price / 100}$`}
                onclick={()=> handleNavigate(product.id)}
                />
                
            )
        })}
    </section>
    </>
  );
};

export default Articles;
