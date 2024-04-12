import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import UserLogged from "../components/LoginPage/UserLogged";
import { useState } from "react";
import "../css/LoginPage.css";

const LoginPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const { register, handleSubmit, reset } = useForm();

  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

  if (localStorage.getItem("token")) {
    return <UserLogged setUser={setUser} user={user} />;
  }

  return (
    <div className="LoginPage">
      <form className="LoginPage__form" onSubmitCapture={handleSubmit(submit)}>
        <label className="LoginPage__label">
          <span>Email </span>
          <input
            className="LoginPage__input"
            {...register("email")}
            type="email"
          />
        </label>
        <label className="LoginPage__label">
          <span>Password </span>
          <input
            className="LoginPage__input"
            {...register("password")}
            type="password"
          />
        </label>
        <button className="LoginPage__button">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
