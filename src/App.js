
import
{
  Router, Routes, Route, BrowserRouter
} from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App()
{
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SideBar>
    </BrowserRouter >
  );
}

export default App;
