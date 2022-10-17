import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import "./customer.css";
const CustomerReview = () => {
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
      <div className="progress_bar py-4">
        <label>Excilent</label>
        <ProgressBar className="bg-dark" variant="success" animated now={70} />

        <label>Good</label>
        <ProgressBar className="bg-dark" variant="warning" animated now={80} />

        <label>Avarage</label>
        <ProgressBar className="bg-dark" variant="success" animated now={90} />

        <label>Avg below</label>
        <ProgressBar className="bg-dark" variant="success" animated now={80} />

        <label>Poor</label>
        <ProgressBar className="bg-dark" variant="danger" animated now={70} />

        <label>Low</label>
        <ProgressBar className="bg-dark" variant="warning" animated now={80} />
      </div>
    </div>
  );
};

export default CustomerReview;
