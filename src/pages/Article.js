import H1 from "../components/H1"
import Button from "../components/Button"
import Header from "../components/Header"
import CompleteCard from "../components/CompleteCard"

import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const Article = () =>{

    const {id} = useParams()

    useEffect(()=>{
        fetchProducts()
    },[])

    const [cartQuantity,setCartQuantity] = useState(localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0)
    const [product,setProduct] = useState(null)

    const fetchProducts = async () => {
        const request = await fetch(`https://e-commerce-fantastic4.herokuapp.com/products/${id}`)
        const response = await request.json()
        setProduct(response)
        console.log(response)
    }

    const handleAddClick = (id) =>{
        let Ids
    
        if (localStorage.articlesID){
            const localArticlesIds= localStorage.getItem("articlesID")
            Ids = JSON.parse(localArticlesIds)
        }else{
           Ids=[]
        }

        Ids.push(id)

        const stringifiedArticlesIds = JSON.stringify(Ids)
        localStorage.setItem('articlesID', stringifiedArticlesIds)
        setCartQuantity(Ids.length)
    }
    

    return <>
        <Header length={cartQuantity}/>
        <H1>Article</H1>
        {product ? <CompleteCard 
            image={product.productImage} 
            title={product.productName} 
            price={product.price}
            description={product.description}
            owner={product.productOwner}
            handleClick={()=>handleAddClick(product.id)}
             /> : <p>article</p>}
    </>
}

export default Article