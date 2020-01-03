import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./components/intro";
import Graph from "./components/Graph";
import CreateTable from "./components/CreateTable";
import PageView from "./components/PageView";
import "./components/CSS/SideNavigation.css";
import SideNavigation from "./components/SideNavigation";
import "react-notifications-component/dist/theme.css";
// import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="main-dashboard">
      <div>
        <Intro />
        <SideNavigation />
      </div>

      <PageView />
      <div className="inline-data-map">
        {data ? <CreateTable data={data} /> : "loading"}
        <Graph data={data} />
      </div>
    </div>
  );
}

export default App;
