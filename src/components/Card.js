import H3 from "./H3"

const Card = ({image,title,price}) =>{

    return ( 
    <article>

        <img src={image} alt={title} />
        <H3>{title}</H3>
        <p>{price}</p>

    </article>
    )
}

export default Card