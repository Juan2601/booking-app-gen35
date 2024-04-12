import "../../css/UserLogged.css";

const UserLogged = ({ setUser, user }) => {
  const handleLogout = () => {
    localStorage.removeItem("token"), localStorage.removeItem("user");
    setUser();
  };

  return (
    <div className="UserLogged">
      <header className="UserLogged__header">
        <img className="UserLogged__image" src="/user_img.jpg" alt="" />
        <h2 className="UserLogged__name">
          {user.firstName} {user.lastName}
        </h2>
      </header>
      <div className="UserLogged__buttonContainer">
        <button className="UserLogged__button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserLogged;
