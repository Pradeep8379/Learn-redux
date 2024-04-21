import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import statusCodes from "../utils/StatusCodes";
import "./tableProducts.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Pagination from "./Pagination";


const TableProducts = () => {
  const dispatch = useDispatch();
  const { data: originalProducts, status } = useSelector(
    (state) => state.products
  );
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(originalProducts);
  }, [originalProducts]);

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setProducts(sortedProducts);
  };

  if (status === statusCodes.Loading) {
    return <h1>Loading...</h1>;
  }

  if (status === statusCodes.Error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <>
      <FilterListIcon />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Image</th>
            <th>
              <span onClick={handleSort}>
                Price{" "}
                {sortOrder === "asc" ? (
                  <ArrowUpwardIcon />
                ) : (
                  <ArrowDownwardIcon />
                )}
              </span>
            </th>
            <th>Description</th>
            <th>Rating</th>
            <th>No. Of Ratings</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination/>
    </>
  );
};

export default TableProducts;
