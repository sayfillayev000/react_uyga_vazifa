const Main__botton = ({ title, soni }) => {
  return (
    <div className="title__soni">
      <span className="title">{title}</span>
      <span className="soni">{soni}</span>
    </div>
  );
};
const Svg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_584_64)">
          <circle cx="10" cy="10" r="9" stroke="#C5C7CD" stroke-width="2" />
        </g>
        <defs>
          <clipPath id="clip0_584_64">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clip-path="url(#clip0_584_73)">
          <circle cx="10" cy="10" r="10" fill="#3751FF" />
          <path
            d="M5 11L7.92929 13.9293C7.96834 13.9683 8.03166 13.9683 8.07071 13.9293L15 7"
            stroke="white"
            stroke-width="1.7"
            stroke-linecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_584_73">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
// const Button = () =>{
//     return (

//     )
// }
export default Main__botton;
