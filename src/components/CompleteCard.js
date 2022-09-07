import H2 from "./H2";
import H4 from "./H4";
import Button from "./Button";

const CompleteCard = ({
  image,
  title,
  price,
  description,
  handleClick,
  owner,
  text,
  className,
}) => {
  return (
    <article className={`flex ${className}`}>
      <img src={image} alt={title} />
      <div>
        <H2>{title}</H2>
        <H4>{price / 100}$</H4>
        <small>{owner}</small>
        <p>{description}</p>
        <Button handleClick={handleClick} text={text} />
      </div>
    </article>
  );
};

export default CompleteCard;
