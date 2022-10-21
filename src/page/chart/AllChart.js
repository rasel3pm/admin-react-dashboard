import React from "react";

import Sidebar from "../../common/sidebar/Sidebar";
import OrderStatus from "../../components/order-status/OrderStatus";
import "./allcart.css";
const AllChart = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="showChart">
        <OrderStatus />
      </div>
    </div>
  );
};

export default AllChart;
