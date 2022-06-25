import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../src/pages/Header/Header'
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import Products from './pages/Home/Products/Products';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
