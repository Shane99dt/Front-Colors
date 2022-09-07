import H1 from "../components/H1"
import Button from "../components/Button"
import Header from "../components/Header"
import { useState } from "react"

const Panier = () =>{


    const [cartQuantity,setCartQuantity]= useState(localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0)

    const handleDeleteClick = (id) =>{
        const localArticlesIds= localStorage.getItem("articlesID")
        const Ids = JSON.parse(localArticlesIds)
        const index = Ids.indexOf(id)
        Ids.splice(index,1)
        const stringifiedArticlesIds = JSON.stringify(Ids)
        localStorage.setItem('articlesID', stringifiedArticlesIds)
        setCartQuantity(Ids.length)
    }

    return <>
        <Header length={cartQuantity}/>
        <H1>Panier</H1>
        <Button text="test" handleClick={()=>handleDeleteClick(1)}/>
    </>
}

export default Panier