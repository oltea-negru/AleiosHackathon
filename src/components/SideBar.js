import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import Home from '../pages/Home';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Profile from '../pages/Profile';
function SideBar({ children })
{

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

    const [selection, setSelection] = React.useState("Home")

    const navigate = useNavigate()

    const toggle = () =>
    {
        toggleSidebar();
        if (toggled)
        {
            console.log(true);
            collapseSidebar();
        } else
        {
            console.log(false);
            collapseSidebar();
        }
    };

    const isLoggedIn = true
    return (
        <div className='h-screen flex text-black z-50'>
            {isLoggedIn === true ? <Sidebar className='bg-green-900'>
                <Menu iconShape="square">
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<HomeOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Home'); navigate('/') }}>Home</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<CheckroomOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Products'); navigate('/products') }}>Products</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<CategoryOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Categories'); navigate('/categories') }}>Categories</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<FavoriteBorderIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Favourites'); navigate('/favourites') }}>Favourites</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<ShoppingCartOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Shopping Cart'); navigate('/cart') }}>Cart</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<HelpOutlineOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Help section'); navigate('/help') }}>Help</MenuItem>
                </Menu>
            </Sidebar> : null
            }
            <div className='p-3 h-fit w-screen overflow-hidden'>
                {isLoggedIn === true ? <div className='flex flex-row'><button className='focus:outline-none bg-orange-300 rounded-sm scale-150 ml-3 mt-5 text-white' onClick={toggle}>
                    {toggled ? <KeyboardDoubleArrowRightOutlinedIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon />}
                </button> <h1 className='text-6xl  text-[#aac6a4] absolute right-10'>{selection}</h1></div> : null}
                {children}
            </div>
        </div >
    )
}

export default SideBar