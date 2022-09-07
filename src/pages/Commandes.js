import H1 from "../components/H1"
import Header from "../components/Header"

const Commandes = () =>{
    return <>
        <Header length={localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0}/>
        <H1>Commandes</H1>
    </>
}

export default Commandes