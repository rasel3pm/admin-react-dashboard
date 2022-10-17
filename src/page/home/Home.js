import React from "react";

import Sidebar from "../../common/sidebar/Sidebar";
import "remixicon/fonts/remixicon.css";
import { Container } from "react-bootstrap";
import "./home.css";
import EarningReview from "../../components/earning-review/EarningReview";
import CustomerReview from "../../components/customer-review/CustomerReview";
import GoalChart from "../../components/goal/GoalChart";
import OrderStatus from "../../components/order-status/OrderStatus";
import TopSeller from "../../components/top-seller/TopSeller";
const Home = () => {
  return (
    <div className="main">
      <Sidebar />

      <div className="home_content ">
        <div className="ear_customer">
          <div>
            <EarningReview />

            <div className="goal_order_chart my-4">
              <div className="goal_complite">
                <OrderStatus />
              </div>
              <div className="order_status">
                <GoalChart />
              </div>
            </div>
          </div>

          <div>
            <CustomerReview />
          </div>
        </div>

        {/* top seller website visitor task last area */}

        <div className="topSeller_website_task">
          <div className="topSeller">
            <TopSeller />
          </div>
          <div className="website">
            <TopSeller />
          </div>
          <div className="task">
            <TopSeller />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
