import React from "react";
import Sidebar from "../../common/sidebar/Sidebar";
import TopSeller from "../../components/top-seller/TopSeller";
import "./user.css";
const Users = () => {
  return (
    <div>
      <div className="main">
        <Sidebar />
        <TopSeller />
      </div>
    </div>
  );
};

export default Users;
