import { useForm } from "react-hook-form";
import UseCrud from "../../hooks/UseCrud";

const FormReserve = ({ hotelId }) => {
  const { handleSubmit, register, reset } = useForm();

  const [, , createBooking] = UseCrud();

  const submit = (data) => {
    const url = "https://hotels-api.academlo.tech/bookings";
    data.hotelId = Number(hotelId);
    console.log(data);

    createBooking(url, data);
  };

  return (
    <section>
      <h3>Do you want to reserve this hotel?</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register("checkIn")} type="date" />
        </label>
        <label>
          <span>check-out</span>
          <input {...register("checkOut")} type="date" />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
