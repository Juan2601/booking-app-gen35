import { useNavigate } from "react-router-dom";
import "../../css/HotelCard.css";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <article className="HotelCard">
      <header>
        <img className="HotelCard__image" src={hotel.images[0].url} alt="" />
      </header>
      <section className="HotelCard__content">
        <h3 className="HotelCard__name">{hotel.name}</h3>
        <p className="HotelCard__rating">{hotel.rating}</p>
        <span className="HotelCard__location">
          {hotel.city.name}, {hotel.city.country}
        </span>
        <div className="HotelCard__price">${hotel.price}</div>
      </section>
      <footer>
        <button className="HotelCard__button" onClick={handleClick}>
          See more...
        </button>
      </footer>
    </article>
  );
};

export default HotelCard;
