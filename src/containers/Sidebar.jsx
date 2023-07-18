import "./Sidebar.scss";
import Logo from "../assets/images/icons/logo.svg";
import SidebarBtn from "../components/Sidebarbtn";
import {Chart, Tickets,Ideas,Contacts,Agents,Articles,Settings,Subscription} from '../assets/icons'

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__header">
        <img src={Logo} alt="Dashboard" />
        <h1>Dashboard Kit</h1>
      </div>
      < SidebarBtn img={<Chart/>}  title="Overview"/>
      < SidebarBtn img={<Tickets/>}  title="Tickets"/>
      < SidebarBtn img={<Ideas/>}  title="Ideas"/>
      < SidebarBtn img={<Contacts/>}  title="Contacts"/>
      < SidebarBtn img={<Agents/>}  title="Agents"/>
      < SidebarBtn img={<Articles/>}  title="Articles"/>
      < SidebarBtn img={<Settings/>}  title="Settings"/>
      < SidebarBtn img={<Subscription/>} title="Subscription"/>
      </div>
  );
};
export default Sidebar;
