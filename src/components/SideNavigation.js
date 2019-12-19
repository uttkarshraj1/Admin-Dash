import React from "react";
function SideNavigation() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Analytics</h2>
      <a href="#">
        <i className="Dashboard"></i> Dashboard
      </a>
      <a href="#">
        <i className="Users"></i> Users Profile
      </a>
      <a href="history">
        <i className="history"></i> History
      </a>
    </div>
  );
}
export default SideNavigation;
