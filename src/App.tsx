import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckOut from "./pages/CheckOut";
import { ProductProvider } from "./Components/ProductProvider";

function App() {
  return (
    <>
      <Router>
        <ProductProvider>
          <Routes>
            <Route element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Route>
          </Routes>
        </ProductProvider>
      </Router>
    </>
  );
}

export default App;
