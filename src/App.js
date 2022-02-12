import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Me from "./Me";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route index element={<AllProducts />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="me" element={<Me />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
