import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./Views/pages/cart/Cart";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Artical /> */}
    </div>
  );
}

export default App;
