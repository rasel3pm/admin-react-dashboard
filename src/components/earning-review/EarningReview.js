import React from "react";
import "./earning-review.css";
const EarningReview = () => {
  return (
    <div className="EarningReview ">
      <div className="item zero">
        <div className="earning_icon">
          <i class="ri-money-dollar-circle-line"></i>
        </div>
        <div className="earning_rate mt-2">
          <span>22,68,454</span>
        </div>
        <div className="earning_title">
          <p>Earn of the month</p>
        </div>
      </div>
      <div className="item two">
        <div className="earning_icon">
          <i class="ri-bar-chart-grouped-line"></i>
        </div>
        <div className="earning_rate mt-2">
          <span>$5,667</span>
        </div>
        <div className="earning_title">
          <p>Earn Growth</p>
        </div>
      </div>
      <div className="item theree">
        <div className="earning_icon">
          <i class="ri-pulse-line"></i>
        </div>
        <div className="earning_rate mt-2">
          <span>69.5%</span>
        </div>
        <div className="earning_title">
          <p>Conversion Rate</p>
        </div>
      </div>
      <div className="item four">
        <div className="earning_icon">
          <i class="ri-bubble-chart-fill"></i>
        </div>
        <div className="earning_rate mt-2">
          <span>38.05%</span>
        </div>
        <div className="earning_title">
          <p>Gross Profit Margin</p>
        </div>
      </div>
    </div>
  );
};

export default EarningReview;
