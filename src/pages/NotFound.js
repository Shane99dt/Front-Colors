import H1 from "../components/H1"
import Header from "../components/Header"

const NotFound = () =>{
    return <>
        <Header length={localStorage.articlesID ? JSON.parse(localStorage.getItem("articlesID")).length : 0}/>
        <H1>NotFound</H1>
    </>
}

export default NotFound