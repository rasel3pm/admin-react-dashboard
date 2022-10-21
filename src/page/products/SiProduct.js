import React from "react";
const SiProduct = (props, Table) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id No</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product price</th>
            <th>Product Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.title}</td>
            <td>jjfjd</td>
            <td>Laptop</td>
            <td>$200</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default SiProduct;
