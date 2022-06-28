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
import RequireAuth from './User/RequireAuth/RequireAuth';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/product/:productId" element={<RequireAuth><ProductDetails /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manage" element={<RequireAuth><ManageProducts /></RequireAuth>} />
        <Route path="/add" element={<RequireAuth><AddProduct /></RequireAuth>} />
        <Route path="*" element={<NotFound></NotFound>} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
