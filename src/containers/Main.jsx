import TomCruise, { ChrisEvans, ChristianBale, HenryCavil, MattDamon, RobertDowney, SamSmith, SteveRogers } from "../assets/user";
import Users from "../components/users";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="All__tickets">
        <h1>All tickets</h1>
        <div className="sort__filter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.12857 4.26839L3.31563 2.12548C3.48647 1.95815 3.7636 1.9582 3.93434 2.12548L6.12132 4.26839C6.39667 4.53812 6.20059 5.00001 5.81195 5.00001H4.5V13.5714C4.5 13.8081 4.30414 14 4.0625 14H3.1875C2.94586 14 2.75 13.8081 2.75 13.5714V5.00001H1.43794C1.04853 5.00001 0.853791 4.53758 1.12857 4.26839ZM7.5625 3.7143H14.5625C14.8041 3.7143 15 3.52243 15 3.28573V2.42858C15 2.19188 14.8041 2.00001 14.5625 2.00001H7.5625C7.32086 2.00001 7.125 2.19188 7.125 2.42858V3.28573C7.125 3.52243 7.32086 3.7143 7.5625 3.7143ZM7.125 6.71429V5.85715C7.125 5.62045 7.32086 5.42858 7.5625 5.42858H12.8125C13.0541 5.42858 13.25 5.62045 13.25 5.85715V6.71429C13.25 6.951 13.0541 7.14287 12.8125 7.14287H7.5625C7.32086 7.14287 7.125 6.951 7.125 6.71429ZM7.125 13.5714V12.7143C7.125 12.4776 7.32086 12.2857 7.5625 12.2857H9.3125C9.55414 12.2857 9.75 12.4776 9.75 12.7143V13.5714C9.75 13.8081 9.55414 14 9.3125 14H7.5625C7.32086 14 7.125 13.8081 7.125 13.5714ZM7.125 10.1429V9.28572C7.125 9.04901 7.32086 8.85715 7.5625 8.85715H11.0625C11.3041 8.85715 11.5 9.04901 11.5 9.28572V10.1429C11.5 10.3796 11.3041 10.5714 11.0625 10.5714H7.5625C7.32086 10.5714 7.125 10.3796 7.125 10.1429Z"
              fill="#C5C7CD"
            />
          </svg>
          <span>Sort</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61493 13.8979C8.98484 14.1568 9.5 13.8944 9.5 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z"
              fill="#C5C7CD"
            />
          </svg>
          <span>Filter</span>
        </div>
      </div>
      <div className="user__title">
        <h5>Ticket details</h5>
        <h5>Customer name</h5>
        <h5>Date</h5>
        <h5>Priority</h5>
      </div>
      <Users name={<MattDamon />} />
      <Users name={<MattDamon />} />
      <Users name={<RobertDowney />} />
      <Users name={<ChristianBale />} />
      <Users name={<HenryCavil />} />
      <Users name={<ChrisEvans />} />
      <Users name={<SamSmith />} />
      <Users name={<SteveRogers />} />
      <div className="Rows">
        <span>Rows per page:{" "}8</span>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.98357 4.5H9.01404C9.43123 4.5 9.63982 5.00391 9.34451 5.29922L6.33045 8.31562C6.14763 8.49844 5.84998 8.49844 5.66717 8.31562L2.6531 5.29922C2.35779 5.00391 2.56638 4.5 2.98357 4.5Z"
            fill="#9FA2B4"
          />
        </svg>
        <span>1-8 of 1240</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6"
            stroke="#9FA2B4"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 18L14.9293 12.0707C14.9683 12.0317 14.9683 11.9683 14.9293 11.9293L9 6"
            stroke="#9FA2B4"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Main;
