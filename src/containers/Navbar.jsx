import "./Navbar.scss";
import User__img from '../assets/images/img/header.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Tickets</h1>
      <div className="header">
      <svg
      className="search"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clip-path="url(#clip0_597_215)">
          <circle
            cx="6.5"
            cy="6.5"
            r="5.75"
            stroke="#C5C7CD"
            stroke-width="1.5"
          />
          <path
            d="M11 11L15 15"
            stroke="#C5C7CD"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_597_215">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
      className="notifications"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M7.99999 16C9.10374 16 9.99905 15.1047 9.99905 14H6.00093C6.00093 15.1047 6.89624 16 7.99999 16ZM14.7309 11.3216C14.1272 10.6728 12.9975 9.69687 12.9975 6.5C12.9975 4.07188 11.295 2.12812 8.99937 1.65125V1C8.99937 0.447812 8.55187 0 7.99999 0C7.44812 0 7.00062 0.447812 7.00062 1V1.65125C4.70499 2.12812 3.00249 4.07188 3.00249 6.5C3.00249 9.69687 1.8728 10.6728 1.26905 11.3216C1.08155 11.5231 0.998429 11.7641 0.999991 12C1.00343 12.5125 1.40562 13 2.00312 13H13.9969C14.5944 13 14.9969 12.5125 15 12C15.0016 11.7641 14.9184 11.5228 14.7309 11.3216Z"
          fill="#C5C7CD"
        />
      </svg>
      <svg
      className="line"
        xmlns="http://www.w3.org/2000/svg"
        width="2"
        height="32"
        viewBox="0 0 2 32"
        fill="none"
      >
        <path d="M1 0V32" stroke="#DFE0EB" />
      </svg>
      <h2>Jones Ferdinand</h2>
       <img src={User__img} className="img__user"></img>
      </div>
    </div>
  );
};
export default Navbar;
