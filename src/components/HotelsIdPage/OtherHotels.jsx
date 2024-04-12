import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import HotelCard from "../HomePage/HotelCard";
import "../../css/OtherHotels.css";

const OtherHotels = ({ hotel }) => {
  const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`;
  const [hotelsInCity, getHotelsInCity] = useFetch(url);

  useEffect(() => {
    if (hotel) {
      getHotelsInCity();
    }
  }, [hotel]);

  console.log({ hotel, hotelsInCity });

  return (
    <section className="OtherHotels">
      <h3 className="OtherHotels__header">
        Other hotels in{" "}
        <span className="OtherHotels__cityName">{hotel?.city?.name}</span>
      </h3>
      <div className="OtherHotels__hotelContainer">
        {hotelsInCity
          ?.filter((hotelInfo) => hotelInfo.id !== hotel.id)
          .map((hotelInfo) => (
            <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
          ))}
      </div>
    </section>
  );
};

export default OtherHotels;
