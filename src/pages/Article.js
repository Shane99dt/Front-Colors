import H1 from "../components/H1"
import Button from "../components/Button"
import Header from "../components/Header"

import { useState } from "react"

const Article = () =>{

    const [cartQuantity,setCartQuantity] = useState(localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0)

    const handleAddClick = () =>{
        let Ids
    
        if (localStorage.articlesID){
            const localArticlesIds= localStorage.getItem("articlesID")
            Ids = JSON.parse(localArticlesIds)
        }else{
           Ids=[]
        }

        Ids.push(1)

        const stringifiedArticlesIds = JSON.stringify(Ids)
        localStorage.setItem('articlesID', stringifiedArticlesIds)
        setCartQuantity(Ids.length)
    }
    

    return <>
        <Header length={cartQuantity}/>
        <H1>Article</H1>
        <Button handleClick={handleAddClick} text="Test"/>
    </>
}

export default Article