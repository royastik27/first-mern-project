import { Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import Content from "./components/content";
import Sidebar from "./components/sidebar";
// import "./components/navbar.css";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <Navbar />
        <div className="content col-12 col-md-9">
          <Outlet />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
