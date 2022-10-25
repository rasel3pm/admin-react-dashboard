import React, { useEffect, useState } from "react";
import SiProduct from "./SiProduct";
import Sidebar from "../../common/sidebar/Sidebar";
import axios from "axios";
import { Table } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((tood) => setInfo(tood.data));
  }, []);

  return (
    <>
      <div className="main">
        <Sidebar />
        <section>
          {info.slice(0, 10).map((todo) => (
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
                  <td>{todo.id}</td>
                  <td>
                    <img src={todo.thumbnailUrl} />
                  </td>
                  <td>{todo.title}</td>
                  <td>$200</td>
                  <td>5</td>
                </tr>
              </tbody>
            </Table>
          ))}
        </section>
      </div>
    </>
  );
};

export default Products;
