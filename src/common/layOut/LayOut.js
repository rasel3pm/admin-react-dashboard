import React from "react";
import Sidebar from "../sidebar/Sidebar";

const LayOut = ({ children }) => {
  return (
    <div>
      <Sidebar />

      {children}
    </div>
  );
};

export default LayOut;
