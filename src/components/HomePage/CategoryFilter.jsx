import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getHotelThunk } from "../../store/states/hotels.slice";
import { useDispatch } from "react-redux";
import "../../css/CategoryFilter.css";

const CategoryFilter = () => {
  const url = "https://hotels-api.academlo.tech/cities";
  const [cities, getCities] = useFetch(url);

  useEffect(() => {
    getCities();
  }, []);

  console.log({ cities });

  const dispatch = useDispatch();

  const handleFilterCity = (id) => {
    let url;

    if (id) {
      url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`;
    } else {
      url = "https://hotels-api.academlo.tech/hotels";
    }

    dispatch(getHotelThunk(url));
  };

  return (
    <section className="CategoryFilter">
      <div className="CategoryFilter__dropdown">
        <button className="CategoryFilter__dropBtn">Category</button>        
        <div className="CategoryFilter__dropdownContent">
          <li
            className="CategoryFilter__item"
            onClick={() => handleFilterCity()}
          >
            All cities
          </li>
          {cities?.map((city) => (
            <li
              className="CategoryFilter__item"
              onClick={() => handleFilterCity(city.id)}
              key={city.id}
            >
              {city.name}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
