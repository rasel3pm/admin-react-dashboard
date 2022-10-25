import React from "react";
import { Table } from "react-bootstrap";

const TopSeller = () => {
  return (
    <div>
      <Table hover className="topseller_table text-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Product</th>
            <th>Product id</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dow</td>
            <td>abc@gmail.com</td>
            <td>74754765</td>
            <th>Product</th>
            <th>755674tt7t7</th>
            <th>pending</th>
          </tr>
          <tr>
            <td>emus</td>
            <td>abc@gmail.com</td>
            <td>74754765</td>
            <th>Product</th>
            <th>jkjdfi58746</th>
            <th>Success</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TopSeller;
