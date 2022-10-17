import React from "react";
import style from "./sidebar.css";
import { NavLink } from "react-router-dom";
import avatar from "../../asset/picture/im.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="admin_avater pt-3">
        <div className="picture">
          <img src={avatar} />
        </div>
        <div className="name">
          <span>MD RASEL KIBRIA</span>
        </div>
      </div>
      <ul>
        <NavLink to="/">
          <li className="list-items">
            <i class="ri-dashboard-fill"></i>
            Dashbord
          </li>
        </NavLink>

        <NavLink to="/products" className="navtext">
          <li className="list-items">
            <i class="ri-product-hunt-line"></i>
            Produts
          </li>
        </NavLink>

        <NavLink className="navtext" to="/order">
          <li className="list-items">
            <i class="ri-product-hunt-line"></i>
            Order List
          </li>
        </NavLink>

        <NavLink className="navtext" to="/users">
          <li className="list-items">
            <i class="ri-user-3-line"></i>
            Users
          </li>
        </NavLink>

        <NavLink className="navtext" to="/charts">
          <li className="list-items">
            <i class="ri-user-3-line"></i>
            Charts
          </li>
        </NavLink>

        <NavLink className="navtext" to="/addItems">
          <li className="list-items">
            <i class="ri-add-circle-line"></i>
            Add Product
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
