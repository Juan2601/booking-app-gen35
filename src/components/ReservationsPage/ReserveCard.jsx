const ReserveCard = ({ reserve, setReserveSelected, deletBooking }) => {
  const checkIn = new Date(reserve.checkIn);
  const checkOut = new Date(reserve.checkOut);
  const reservationDays = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationDays,
      subtotal: reserve.hotel.price * reservationDays,
    };
    setReserveSelected(reserve);
  };

  const handleDeleteBooking = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`;
    deletBooking(url, reserve.id);
  };

  return (
    <article>
      <header>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section>
        <ul>
          <li>
            <span>Reservation Days: </span>
            <span>{reservationDays}</span>
          </li>
          <li>
            <span>subtotal Price: </span>
            <span>{reserve.hotel.price * reservationDays} USD</span>
          </li>
        </ul>
      </section>
      <footer>
        <button onClick={handleDeleteBooking}>
          <i className="bx bx-trash"></i>
        </button>
      </footer>
    </article>
  );
};

export default ReserveCard;
