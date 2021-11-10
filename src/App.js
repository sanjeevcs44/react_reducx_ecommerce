import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
