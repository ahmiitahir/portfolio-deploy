import React from "react";

import { Link } from "react-router-dom";

import Product from "../product/Product";
import { products } from "../../data";

const AllProjects = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to="/">{`< back`}</Link>
      <p
        style={{
          fontSize: "5rem",
        }}
      >
        Work in Progress...
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "12px",
        }}
      >
        {products.map((item) => {
          return (
            <li>
              <Link to={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default AllProjects;
