import Header from "./components/Header"
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
      <Header/>
      <Routes>
      <Route path="/" element={<ProductListing/>} />
      <Route path="/product/:productId" element={<ProductDetails/>} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
