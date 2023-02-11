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
function SideBar({ children })
{

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

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
        <div className='h-screen flex text-black'>
            {isLoggedIn === true ? <Sidebar className='bg-green-900'>
                <Menu iconShape="square">
                    <MenuItem icon={<HomeOutlinedIcon />} onClick={() => navigate('/')}>Home</MenuItem>
                    <MenuItem icon={<CheckroomOutlinedIcon />} onClick={() => navigate('/products')}>Products</MenuItem>
                    <MenuItem icon={<CategoryOutlinedIcon />} onClick={() => navigate('/categories')}>Categories</MenuItem>
                    <MenuItem icon={<ShoppingCartOutlinedIcon />} onClick={() => navigate('/cart')}>Cart</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />} onClick={() => navigate('/help')}>Help</MenuItem>
                </Menu>
            </Sidebar> : null}
            <div className='p-3 h-fit w-screen'>
                {isLoggedIn === true ? <button className='focus:outline-none bg-orange-300 rounded-sm text-white' onClick={toggle}>
                    {toggled ? <KeyboardDoubleArrowRightOutlinedIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon />}
                </button> : null}
                {children}
            </div>
        </div>
    )
}

export default SideBar