import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./components/intro";

import CreateTable from "./components/CreateTable";
import PageView from "./components/PageView";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./components/CSS/Navbar.css";
import "./components/CSS/SideNavigation.css";
import SideNavigation from "./components/SideNavigation";
import "react-notifications-component/dist/theme.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);
  console.log(data);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Intro /> */}
      <SideNavigation />
      <PageView />;{data ? <CreateTable data={data} /> : "loading"}
    </div>
  );
}

export default App;
