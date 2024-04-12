import { Link } from "react-router-dom";
import "../../css/PrincipalHeader.css";

const PrincipalHeader = () => {
  return (
    <header className="PrincipalHeader">
      <h1 className="PrincipalHeader__title">
        <Link to="/" className="PrincipalHeader__linkHotel">
          Hotels-App
        </Link>
      </h1>
      <nav className="PrincipalHeader__nav">
        <ul className="PrincipalHeader__list">
          <li className="PrincipalHeader__listItem">
            <Link to="/reservations" className="PrincipalHeader__link">
              Reservations
            </Link>
          </li>
          <li className="PrincipalHeader__listItem">
            <Link to="/register" className="PrincipalHeader__link">
              Register
            </Link>
          </li>
          <li className="PrincipalHeader__listItem">
            <Link to="/login" className="PrincipalHeader__link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PrincipalHeader;
