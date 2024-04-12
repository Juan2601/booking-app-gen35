import { useSelector } from "react-redux";
import HotelCard from "../components/HomePage/HotelCard";
import { useRef, useState } from "react";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import "../css/HomePage.css";
import PriceFilter from "../components/HomePage/PriceFilter";

const HomePage = () => {
  const [inputName, setInputName] = useState("");
  const [fromTo, setfromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const hotels = useSelector((states) => states.hotels);

  const inputValue = useRef();

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  console.log(hotels);

  const cbfilter = (hotelInfo) => {
    //Filter name
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());
    //Filter price
    const price = Number(hotelInfo.price);
    const filterPrice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterPrice;
  }; 

  return (
    <div className="HomePage">
      <div className="HomePage__filter">
        <div className="HomePage__inputContainer">
          <input
            onChange={handleChange}
            value={inputName}
            ref={inputValue}
            type="text"
            className="HomePage__input"
            placeholder="¿Qué hotel quieres reservar?"
          />
        </div>
        <div className="HomePage__aside">
          <h3 className="HomePage__asideTitlePrice">Filter by</h3>
          <PriceFilter setFromTo={setfromTo} />
        </div>
        <div className="HomePage__asideTitleCategory">
        <CategoryFilter className="HomePage__filterContainer" />
        </div>
      </div>
      <div className="HomePage__hotelContainer">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
