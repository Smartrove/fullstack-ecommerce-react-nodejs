import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import PaystackIntegration from "./components/PaystackIntegration";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryItems from "./components/CategoryItems";
import Products from "./components/Products";

function App() {
  const user = false;
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Announcement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/product" element={<Product />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/productList/:category" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paystack" element={<PaystackIntegration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
