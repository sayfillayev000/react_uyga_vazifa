import Main__botton from "../components/Main__botton";
import "./Overview.scss";

const Overview = () => {
  return (
    <div className="Overview">
      <div className="Card">
        <div className="Unresolved">
          <h3>Unresolved</h3>
          <h1>60</h1>
        </div>
        <div className="Unresolved">
          <h3>Overdue</h3>
          <h1>16</h1>
        </div>
        <div className="Unresolved">
          <h3>Open</h3>
          <h1>43</h1>
        </div>
        <div className="Unresolved">
          <h3>On hold</h3>
          <h1>64</h1>
        </div>
      </div>
      <div className="Trends">
        <div className="Today">
          <div className="title">
            <h3>Today’s trends</h3>
            <span>as of 25 May 2019, 09:41 PM</span>
          </div>

          <svg
            className="line"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="2"
            viewBox="0 0 18 2"
            fill="none"
          >
            <path
              d="M1 1H17"
              stroke="#3751FF"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <h4>Today</h4>
          <svg
            className="line"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="2"
            viewBox="0 0 18 2"
            fill="none"
          >
            <path
              d="M1 1H17"
              stroke="#DFE0EB"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <h4>Yesterday</h4>
        </div>
        <div className="box">
          <div className="box__item">
            <h3>Resolved</h3>
            <h2>449</h2>
          </div>
          <div className="box__item">
            <h3>Received</h3>
            <h2>426</h2>
          </div>
          <div className="box__item">
            <h3>Average first response time</h3>
            <h2>33m</h2>
          </div>
          <div className="box__item">
            <h3>Average response time</h3>
            <h2>3h 8m</h2>
          </div>
          <div className="box__item">
            <h3>Resolution within SLA</h3>
            <h2>94%</h2>
          </div>
        </div>
      </div>
      <div className="Main__botton">
        <div className="Support">
          <div className="Support__title">
            <h2>Unresolved tickets</h2>
            <span>View details</span>
          </div>
          <p>
            Group: <span>Support</span>
          </p>
          <Main__botton title="Waiting on Feature Request" soni="4238" />
          <Main__botton title="Awaiting Customer Response" soni="1005" />
          <Main__botton title="Awaiting Developer Fix" soni="914" />
          <Main__botton title="Pending" soni="281" />
        </div>
        <div className="Tasks">
          <div className="Support__title">
            <h2>Tasks</h2>
            <span>View all</span>
          </div>
          <p>Today</p>
          <div className="Supprort__box">
            <span>Create new task</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" rx="8" fill="#F0F1F7" />
              <path
                d="M12 7V17"
                stroke="#9FA2B4"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M17 12L7 12"
                stroke="#9FA2B4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="Finish">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_584_64)">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C5C7CD"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_584_64">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Finish ticket update</span>
            </div>
            <button className="Urgent">Urgent</button>
          </div>
          <div className="Finish">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_584_64)">
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#C5C7CD"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_584_64">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Finish ticket update</span>
            </div>
            <button className="New">New</button>
          </div>
          <div className="Finish">
            <div>
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
              <span>Finish ticket update</span>
            </div>
            <button className="Default">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
