import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Intro from "./intro";
function SideNavigation() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Analytics</h2>

      <a href="dashboard">Dashboard</a>
      <a href="dashboard/user">Users Profile</a>
    </div>
  );
}
export default SideNavigation;
