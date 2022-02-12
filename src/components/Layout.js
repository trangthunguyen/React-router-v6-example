import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ textAlign: "center" }} className="mt-1">
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{" "}
        <Link to="products">Products</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
