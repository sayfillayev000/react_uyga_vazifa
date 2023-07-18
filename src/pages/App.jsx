import Sidebar from "../containers/Sidebar";
import Main from "../containers/Main";
import Navbar from "../containers/Navbar";
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Navbar/>
        <Main />
      </div>
    </div>
  );
};

export default App;
