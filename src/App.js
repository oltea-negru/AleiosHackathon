
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
import Help from './pages/Help';
import Profile from './pages/Profile';
import Favorites from './pages/Favourites';
import AddProduct from './pages/AddProduct';
import UserProfile from './pages/UserProfile';


function App()
{
  return (
    <BrowserRouter>
      <SideBar >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/food" element={<Food />} />
          <Route path="/categories/tools" element={<Tools />} />
          <Route path="/categories/clothes" element={<Clothes />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/help" element={<Help />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </SideBar>
    </BrowserRouter >
  );
}

export default App;
