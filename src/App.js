
import
{
  Router, Routes, Route, BrowserRouter
} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart.js';
import Categories from './pages/Categories';
import Food from './pages/Food';
import Tools from './pages/Tools';
import Clothes from './pages/Clothes';
import Favorites from './pages/Favourites';


function App()
{
  return (
    <BrowserRouter>
      <SideBar className="font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/food" element={<Food />} />
          <Route path="/categories/tools" element={<Tools />} />
          <Route path="/categories/clothes" element={<Clothes />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </SideBar>
    </BrowserRouter >
  );
}

export default App;
