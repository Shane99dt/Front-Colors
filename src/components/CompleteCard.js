import H3 from "./H3"
import H4 from "./H4"
import Button from "./Button"

const CompleteCard = ({image,title,price,description,handleClick}) =>{

    return ( 
    <article className="flex">

        <img src={image} alt={title} />
        <div>
            <H3>{title}</H3>
            <H4>{price}</H4>
            <p>{description}</p>
            <Button text="ADD TO CART" handleClick={handleClick}/>
        </div>

    </article>
    )
}

export default CompleteCard