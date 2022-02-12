import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Products() {
    return (
        <div>
            <h2 className="mb-3 mt-1">Products</h2>
            <Link to="./jordan-mars-270-london">Me</Link> | <Link to="">All</Link>
            <Outlet />
        </div>
    )
}

export default Products
