import React from "react";
import { Table } from "react-bootstrap";

const TopSeller = () => {
  return (
    <div>
      <Table hover variant="dark">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Country</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TopSeller;
