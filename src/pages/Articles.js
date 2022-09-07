import H1 from "../components/H1";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Articles = () => {

    const [products, setProduct] = useState([])
    const [categories, setCatergories] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const request = await fetch('https://e-commerce-fantastic4.herokuapp.com/products')
        const response = await request.json()
        setProduct(response)
        console.log(response)
    }

  return (
    <>
    <div className="title-container">
      <H1>SHOP</H1>
    </div>
    <section className="articles-container">
        {/* {products.map((product) => {
            return(
                <Card 
                image={''} 
                title={''} 
                price={''} />
            )
        })} */}
    </section>
    </>
  );
};

export default Articles;
