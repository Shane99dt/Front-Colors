import H3 from "./H3"
import H4 from "./H4"
import Button from "./Button"

const CompleteCard = ({image,title,price,description,handleClick,owner,text}) =>{

    return ( 
    <article className="flex">

        <img src={image} alt={title} />
        <div>
            <H3>{title}</H3>
            <H4>{price/100}$</H4>
            <small>{owner}</small>
            <p>{description}</p>
            <Button handleClick={handleClick} text={text}/>
        </div>

    </article>
    )
}

export default CompleteCard