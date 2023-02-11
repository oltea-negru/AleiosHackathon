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
function SideBar({ children })
{

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

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
        <div className='h-screen flex '>
            {isLoggedIn === true ? <Sidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                    <MenuItem icon={<CheckroomOutlinedIcon />}>Products</MenuItem>
                    <MenuItem icon={<CategoryOutlinedIcon />}>Categories</MenuItem>
                    <MenuItem icon={<ShoppingCartOutlinedIcon />}>Cart</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>Help</MenuItem>
                </Menu>
            </Sidebar> : null}
            <div className='p-3 h-fit w-screen'>
                {isLoggedIn === true ? <button className='focus:outline-none' onClick={toggle}>
                    {toggled ? <KeyboardDoubleArrowRightOutlinedIcon /> : <KeyboardDoubleArrowLeftOutlinedIcon />}
                </button> : null}
                {children}
            </div>
        </div>
    )
}

export default SideBar