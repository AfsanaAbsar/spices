import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/pages/Header/Header'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Products from './pages/Home/Products/Products';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import ProductDetails from './pages/Home/ProductDetails/ProductDetails';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import AddProduct from './pages/AddProduct/AddProduct';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manage" element={<ManageProducts />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
