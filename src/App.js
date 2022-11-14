import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import PaystackIntegration from "./components/PaystackIntegration";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Product /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
      <PaystackIntegration />
    </div>
  );
}

export default App;
