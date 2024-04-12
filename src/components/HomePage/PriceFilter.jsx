import { useForm } from "react-hook-form";
import "../../css/PriceFilter.css"

const PriceFilter = ({ setFromTo }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const from = data.from;
    const to = data.to;

    setFromTo({
      from: from === "" ? 0 : +from,
      to: to === "" ? Infinity : Number(to),
    });
  };

  return (
    <section className="PriceFilter">
      <h3 className="PriceFilter__title">Price</h3>
      <form className="PriceFilter__form" onSubmit={handleSubmit(submit)}>
        <label className="PriceFilter__label">
          <span className="PriceFilter__labelText">From</span>
          <input
            className="PriceFilter__input"
            {...register("from")}
            type="number"
          />
        </label>
        <label className="PriceFilter__label">
          <span className="PriceFilter__labelText">To</span>
          <input
            className="PriceFilter__input"
            {...register("to")}
            type="number"
          />
        </label>
        <button className="PriceFilter__button">Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;
