import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Home from '../pages/Home';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Profile from '../pages/Profile';
import { AccountBoxOutlined } from '@mui/icons-material';
function SideBar({ children, isLoggedIn=false })
{

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

    const [selection, setSelection] = React.useState("Home")
    console.log(selection);

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

    return (
        <div className='h-fit flex text-black z-50'>
            {isLoggedIn === true ? <Sidebar
                backgroundColor='#08a077'
            >

                <Menu iconShape="square">
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<HomeOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('PRELOVED'); navigate('/') }}>Home</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<AddCircleOutlineOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Add Product'); navigate('/add-product') }}>Add product</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<AccountCircleOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Profile'); navigate('/profile') }}>Profile</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<CheckroomOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Products'); navigate('/products') }}>Products</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<CategoryOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Categories'); navigate('/categories') }}>Categories</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={< FavoriteBorderIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Favourites'); navigate('/favourites') }}> Favourites</MenuItem >
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<ShoppingCartOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Shopping Cart'); navigate('/cart') }}>Cart</MenuItem>
                    <MenuItem className='text-white font-bold hover:scale-110 hover:text-black mt-6' icon={<HelpOutlineOutlinedIcon className="text-black bg-white rounded-sm p-1 scale-150" />} onClick={() => { setSelection('Help section'); navigate('/help') }}>Help</MenuItem>
                </Menu >
            </Sidebar > : null
            }
            <div className='p-3 w-screen'>
                {isLoggedIn === true ? <div className='flex flex-row '><button className='focus:outline-none bg-[#f0ab57] active:scale-150 rounded-sm scale-125 mt-5 text-white' onClick={toggle}>
                    {toggled ? <KeyboardDoubleArrowRightOutlinedIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon />}
                </button> <h1 className='text-6xl  text-[#08a077] absolute right-10'>{selection}</h1></div> : null}
                {children}
            </div>
        </div >
    )
}

export default SideBar