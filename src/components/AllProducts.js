import React from "react";
import { Link } from "react-router-dom";
import shoes from "./../shoes.json";

function AllProducts() {
  return (
    <div className="mb-5">
      <h2>All Products</h2>
      <div className="container mt-4">
        <div className="row " style={{ justifyContent: "center" }}>
          {Object.entries(shoes).map(([id, { name, img }]) => (
            <Link
              to={id}
              key={id}
              className="mr-4 mb-4 p-3"
              style={{ boxShadow: "0 0 12px #efefef" }}
            >
              <img src={img} width="220" height="220" alt={id} />
              <p className="mb-1 mt-2">{name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
