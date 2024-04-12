import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import { Map, Overlay } from "pigeon-maps";
import OtherHotels from "../components/HotelsIdPage/OtherHotels";
import "../css/HotelsIdPage.css";
import FormReserve from "../components/HomePage/FormReserve";

const HotelsIdPage = () => {
  const { id } = useParams();

  const url = `https://hotels-api.academlo.tech/hotels/${id}`;
  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [id]);

  return (
    <div className="HotelsIdPage">
      <h2 className="HotelsIdPage__title">{hotel?.name}</h2>
      <h3 className="HotelsIdPage__rating">RATING - {hotel?.rating}</h3>
      <div className="HotelsIdPage__slider">
        <img src={hotel?.images[0].url} alt="" />
        {hotel && (
          <Map
            className="HotelsIdPage__map"
            height={200}
            defaultCenter={[+hotel.lat, +hotel.lon]}
            zoom={15}
            maxZoom={16}
            minZoom={10}
          >
            <Overlay anchor={[+hotel.lat, +hotel.lon]} offset={[20, 20]}>
              <img src="/hotel-icon.png" width={40} alt="" />
            </Overlay>
          </Map>
        )}
      </div>
      <section className="HotelsIdPage__details">
        <h3 className="HotelsIdPage__cityTitle">
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p>
          <i className="bx bx-map"></i>
          <span className="HotelsIdPage__address">{hotel?.address}</span>
        </p>
        <p className="HotelsIdPage__description">{hotel?.description}</p>
      </section>
      {localStorage.getItem("token") ? (
        <FormReserve hotelId={hotel?.id} />
      ) : (
        <h4>
          If you want to make a reservation, please{" "}
          <Link to="/login">login</Link>{" "}
        </h4>
      )}
      <OtherHotels hotel={hotel} />
    </div>
  );
};

export default HotelsIdPage;
