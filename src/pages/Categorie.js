import { useState } from "react"

import H1 from "../components/H1"
import Header from "../components/Header"

const Categorie = () =>{

    const [cartQuantity,setCartQuantity] = useState(localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0)

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

    return <>

        <Header length={cartQuantity}/>
        <H1>Catégorie</H1>
    </>
}

export default Categorie