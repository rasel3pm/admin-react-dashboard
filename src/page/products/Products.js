import React from "react";
import Sidebar from "../../common/sidebar/Sidebar";
import { Table } from "react-bootstrap";
import Laptop from "../../asset/picture/laptop.jpg";

const Products = () => {
  return (
    <div>
      <div className="main">
        <Sidebar />

        <section className="p-4 text-center">
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
                <td>1</td>
                <td>
                  <img style={{ width: "80px" }} src={Laptop} />
                </td>
                <td>Laptop</td>
                <td>$200</td>
                <td>5</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </section>
      </div>
    </div>
  );
};

export default Products;
