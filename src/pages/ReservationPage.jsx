import { useEffect, useState } from "react";
import UseCrud from "../hooks/UseCrud";
import ReserveCard from "../components/ReservationsPage/ReserveCard";
import FormReviews from "../components/ReservationsPage/FormReviews";
import "../css/ReservationPage.css"

const ReservationPage = () => {
  const [reserveSelected, setReserveSelected] = useState();

  const [bookings, getBookings, , deletBoking] = UseCrud();

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/bookings";
    getBookings(url);
  }, []);

  console.log(bookings);

  return (
    <section className="ReservationPage">
      <FormReviews
        reserveSelected={reserveSelected}
        setReserveSelected={setReserveSelected}
        className="ReservationPage__form_reviews"
      />
      <h2 className="ReservationPage__title">Reservation</h2>
      <div className="ReservationPage__reserveCards">
        {bookings?.map((reserve) => (
          <ReserveCard
            key={reserve.id}
            reserve={reserve}
            setReserveSelected={setReserveSelected}
            deletBooking={deletBoking}
            className="ReservationPage__reserveCard"
          />
        ))}
      </div>
    </section>
  );
};

export default ReservationPage;
