import H3 from "./H3";

const Card = ({ image, title, price, onclick }) => {
  return (
    <article className="card">
      <img onClick={onclick} src={image} alt={title} />
      <H3 onClick={onclick}>{title}</H3>
      <h4 onClick={onclick}>{price}</h4>
    </article>
  );
};

export default Card;
