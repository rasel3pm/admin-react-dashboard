import React from "react";

import { useNavigate } from "react-router-dom";

import ProgressBar from "react-bootstrap/ProgressBar";
import "./customer.css";
const CustomerReview = () => {
  let Navigate = useNavigate();
  const navigateRoute = () => {
    Navigate("/all-review");
  };
  return (
    <div className="CustomerReview p-4">
      CustomerReview
      <div className="ratting">
        <div className="ratting_icon">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
        </div>
        <div className="ratting_result">
          79% <span>High Lite</span>
        </div>
      </div>
      <div>
        <p>Overall ratting of 100%</p>
      </div>
      {/* progress bar */}
      <div className="progress_bar">
        <label>Excilent</label>
        <ProgressBar className="bg-dark" variant="success" animated now={70} />

        <label>Good</label>
        <ProgressBar className="bg-dark" variant="warning" animated now={80} />

        <label>Avarage</label>
        <ProgressBar className="bg-dark" variant="success" animated now={90} />

        <label>Avg below</label>
        <ProgressBar className="bg-dark" variant="primary" animated now={80} />

        <label>Poor</label>
        <ProgressBar className="bg-dark" variant="danger" animated now={70} />

        <label>Low</label>
        <ProgressBar className="bg-dark" variant="warning" animated now={80} />

        <button
          onClick={navigateRoute}
          className="btn mt-2 border-primary text-primary"
        >
          See More Review
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
