
import
{
  Router, Routes, Route, BrowserRouter
} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Categories from './pages/Categories';

function App()
{
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </SideBar>
    </BrowserRouter >
  );
}

export default App;
