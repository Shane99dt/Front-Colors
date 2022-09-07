import H3 from "./H3";

const Card = ({ image, title, price }) => {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <H3>{title}</H3>
      <h4>{price}</h4>
    </article>
  );
};

export default Card;
