import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import "../css/RegisterPage.css";

const RegisterPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "Unknown",
    });
  };

  return (
    <div className="RegisterPage">
      <form className="RegisterPage__form" onSubmit={handleSubmit(submit)}>
        <h2 className="RegisterPage__title">Register </h2>
        <label className="RegisterPage__label">
          <span>First Name </span>
          <input
            className="RegisterPage__input"
            {...register("firstName")}
            type="text"
          />
        </label>
        <label className="RegisterPage__label">
          <span>Last Name </span>
          <input
            className="RegisterPage__input"
            {...register("lastName")}
            type="text"
          />
        </label>
        <label className="RegisterPage__label">
          <span>Email </span>
          <input
            className="RegisterPage__input"
            {...register("email")}
            type="email"
          />
        </label>
        <label className="RegisterPage__label">
          <span>Password </span>
          <input
            className="RegisterPage__input"
            {...register("password")}
            type="password"
          />
        </label>
        <label className="RegisterPage__label">
          <span>Gender </span>
          <select className="RegisterPage__select" {...register("gender")}>
            <option value="unknown">Unknown</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">I'd rather not say</option>
          </select>
        </label>
        <button className="RegisterPage__button">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
