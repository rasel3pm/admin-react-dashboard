import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Home from "./page/home/Home";
import OrdeList from "./page/orderList/OrdeList";
import AllChart from "./page/chart/AllChart";
import AddItems from "./page/addItems/AddItems";
import Users from "./page/Users/Users";
import Products from "./page/products/Products";
import AllReview from "./page/All-Review/AllReview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrdeList />} />
          <Route path="/charts" element={<AllChart />} />
          <Route path="/addItems" element={<AddItems />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/all-review" element={<AllReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
